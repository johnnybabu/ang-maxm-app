import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'orderBy',
    pure:false
})

export class OrderBy implements PipeTransform {
    transform(array: Array<string>, field_val: any): Array<string>{
        if(array.length===0 || typeof field_val=='undefined' || field_val==='' || field_val===null){
            return array;
        }

        let resultArray=[];       
        let colArray=Object.keys(array[0]);
        

        
                
        return resultArray;
    }
}