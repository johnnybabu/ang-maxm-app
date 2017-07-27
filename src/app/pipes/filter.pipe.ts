import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filter',
    pure:false
})

export class Filter implements PipeTransform{
    transform(array: Array<string>, search_val: any): Array<string>{
        if(array.length===0 || typeof search_val=='undefined' || search_val==='' || search_val===null){
            return array;
        }

        let resultArray=[];       
        let colArray=[];
        colArray= Object.keys(array[0]); 
        //let col=colArray[1];
        for (let data of array) {
            var re = new RegExp(search_val, 'gi');
            //let currentValue=String(data[colArray[0]]);
            //if(data[colArray[1]].match('^.*'+search_val+'.*$')){
            for(let i in colArray){
                if (String(data[colArray[i]]).match(re)) {                                        
                    resultArray.push(data);
                    break;
                }
            }
        }    
                
        return resultArray;
    }
}