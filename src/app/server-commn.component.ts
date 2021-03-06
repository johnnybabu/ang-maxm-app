import { Component, OnInit, ViewContainerRef, EventEmitter,ChangeDetectionStrategy,Input, Output } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Products } from './products';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
    selector:'server-commn',
    templateUrl:'./server-commn.component.html',
    styleUrls:['./server-commn.component.css'],
    providers:[HeroService],
    changeDetection:ChangeDetectionStrategy.OnPush,
     
})

export class ServerCommnComponent implements OnInit{
    errorMessage: string;
    @Output() studentChange = new EventEmitter();
    filVal:string='';
  heroes: Hero[];
  products:Products[];
  origProducts:Products[];
  mode = 'Observables';
  productsForm:FormGroup;
  product = new Products();
   constructor (private heroService: HeroService) {
     //overlay.defaultViewContainer = vcRef;
     //this.origProducts=this.products;
   }
 
updFilter(inp){
  this.filVal=inp;
}





  ngOnInit() { this.getHeroes();        
    this.getProducts(); 
    this.productsForm=new FormGroup({
            //'id':new FormControl('55'),
            'product_name':new FormControl('',Validators.required),
            'product_code':new FormControl('',Validators.required),
            'category':new FormControl('',Validators.required),
            'sub_category':new FormControl('',Validators.required)
        });  
}
 
 addProducts(){
   this.product=this.productsForm.value;
   this.heroService.addProduct(this.product)
    .subscribe(
      data=>{
        console.log(data);
        this.productsForm.reset();
        this.getProducts();
      }
    );    

   console.log(this.productsForm);
   //this.productsForm.reset();
 }

 removeProduct(prod:Products){
   const conStat=confirm('Confirm to remove product');
   if(conStat==true){
     this.heroService.removeProduct(prod)
     .subscribe(
       data=>{
         this.getProducts();
         alert(prod.product_name+" removed");
       }
     );
   }
 }

//isEdit=false;
pname:string;
showTB=-1;
 editProduct(prod:Products,i:number){
   
   this.showTB=i;
   //alert(i+' '+this.showTB);
   this.pname=prod.product_name;
   //this.isEdit=true;
 }
 cancelEdit(prod:Products){
   //this.isEdit=false;
   this.showTB=-1;
 }
 updateProduct(prod:Products){
   alert(this.pname);
   prod.product_name=this.pname;
   this.heroService.updateProduct(prod)
                    .subscribe(
                      data=>{
                        this.getProducts();
                        alert(prod.product_name+' saved successfully');
                      }
                    );
   this.showTB=-1;
 }


  getHeroes() {
    this.heroService.getHeroes()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
  }
 
  addHero(name: string) {
    if (!name) { return; }
    this.heroService.create(name)
                     .subscribe(
                       hero  => this.heroes.push(hero),
                       error =>  this.errorMessage = <any>error);
  }

  getProducts(){
      this.heroService.getProducts()
                      .subscribe(
                          products=>{this.products=products;
                          this.origProducts=this.products;},                          
                          error=>this.errorMessage=<any>error);
  }


  //Sorting logic starts here...
  
  sortToggle:boolean=false;
  col_name='';   
  sortByFunc(col){
    if((this.col_name===col && this.sortToggle==true) || this.col_name=='')
    {this.sortToggle=false;} else {this.sortToggle=true;}      

    let isColString:any;
    for(let name of this.products){
      isColString=name[col];
    }   

    if(isNaN(isColString)){ //if string
      if(this.sortToggle==false){
        //sorting string start...
        this.products.sort(function(a, b) {           
        var nameA = a[col].toUpperCase(); // ignore upper and lowercase
        var nameB = b[col].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    } else {
      //this.PnameSortFlag=false;
      this.products.reverse();
    } 
    //sorting string end...
  }else{ //if number
      if(this.sortToggle==false){
        this.products.sort(function (a, b) {
        return b[col] - a[col];
      });
      } else{
        this.products.sort(function (a, b) {
        return a[col] - b[col];
        });
      }    
    }        
    this.col_name=col;          
  }

  //Sorting logic ends here...

  //filtering logic starts here...
  //this.products=this.origProducts;
  globalFilter(filVal,ekey){
    //alert(filVal+' '+ekey.keyCode);
    this.products=this.origProducts;
  
    let filArray=[];
    for(let prod of this.products)
    {
      var re = new RegExp(filVal, 'gi');      
      //not working for numbers...
      if(prod.product_name.match(re) || prod.category.match(re) || prod.sub_category.match(re)){       
        filArray.push(prod);
      }
    }
    this.products=filArray;
  }
  //filtering logic ends here...

selectedCategory='all';
  categFilter(category){
    
    let cfilArray=[];
    this.products=this.origProducts;
    var re = new RegExp(category, 'gi');
    if(category==='all'){this.products=this.origProducts;} else {
        for( let prod of this.products){
        if(prod.category.match(re)){
          cfilArray.push(prod);
        }
      }
      this.products=cfilArray;
    }        
  }

  movies=['Spotlight','Interstellar','Matrix','Spotlight','1408','Matrix','1408'];
  
selectedOption: string;
openPopupForm(){
  document.getElementById('myModal').style.display = "block";
  // let dialogRef = this.dialog.open(DialogResultExampleDialog);
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.selectedOption = result;
  //   });
  }
 closeModal() {
        document.getElementById('myModal').style.display = "none";       
    }    
      
    emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

}
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// @Component({
//   selector: 'dialog-result-example-dialog',
//   //templateUrl: 'dialog-result-example-dialog.html',
//   template:'<p>This is modal dialog by angular material</p>'
// })
// export class DialogResultExampleDialog {
//   constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
// }

