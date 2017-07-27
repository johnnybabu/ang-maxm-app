import { Injectable } from '@angular/core';

@Injectable()

export class ArrayFilterService {

    
    filterColumn(arry:any[]):any[]{
        arry.push("added from service");
        return arry;
    }
}