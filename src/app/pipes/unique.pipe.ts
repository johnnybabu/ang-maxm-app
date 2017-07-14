import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'unique',
    pure:false
})

export class Unique implements PipeTransform{
    transform(array: Array<string>, args: string): Array<string>{
        if(array.length===0){
            return array;
        }
        let resultArray=[];        
        if(typeof args=='undefined' || args==='' || args===null){
            for(let item of array){
                let isDup:boolean=false;
                for(let previtem of resultArray){
                    if(item===previtem){
                        isDup=true;break;
                    } else{isDup=false;}
                }
                if(isDup==false){
                    resultArray.push(item);
                }
            }    
        } else{
            for(let item of array){
                let isDup:boolean=false;
                for(let previtem of resultArray){
                    if(item[args]===previtem[args]){
                        isDup=true;break;
                    } else{isDup=false;}
                }
                if(isDup==false){
                    resultArray.push(item);
                }
            }
        }          
        
        
        return resultArray;
    }
}