import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
    selector:'data-driven',
    templateUrl:'./data-driven.component.html',
    styleUrls: ['./data-driven.component.css']
})

export class DataDrivenComponent{
    myForm:FormGroup;
    constructor(){
        this.myForm=new FormGroup({
            'username':new FormControl('Max',[Validators.required,this.exampleValidator]),
            'email':new FormControl('',[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
            'password':new FormControl('',Validators.required)
        });
    }

    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }

    exampleValidator(control:FormControl):{[s:string]:boolean}{
        if(control.value==="Example"){
            return {example:true};
        }
        return null;
    }

    fruits=['Apple','Mango','Banana','Grapes','Promogrante','Custard Apple','Strawberry'];
}