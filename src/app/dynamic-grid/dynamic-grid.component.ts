import { Component, OnInit } from '@angular/core';
import { GlobalSearchService } from '../global-search.service';
import { ArrayFilterService } from "app/services/array-filter.service";

@Component({
  selector: 'app-dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.css']
})
export class DynamicGridComponent implements OnInit {

  constructor(private globalsearchService:GlobalSearchService,
    private arryfilService:ArrayFilterService) { }

    mvalue=0;
    Acts=['Act1','Act2','Act3','Act4','Act5'];
  ngOnInit() {
   
    //this.Acts=this.arryfilService.filterColumn(this.Acts);
    console.log(this.arryfilService.filterColumn(this.Acts));
  }

  globalMenu: any = [
    { 'id': 1, 'name': 'Associates' },
    { 'id': 2, 'name': 'Companies' },
    { 'id': 3, 'name': 'Items' },
    { 'id': 4, 'name': 'Orders' },
    { 'id': 5, 'name': 'Web Logins' }
  ];
 
  fieldsArray: any = [];
  dataArray: any = [];
  search: any = {
    'table_Value': 'Select Table',
    'field_Value': 'Select Field',
    'text_value': ''
  };
  errorMsg = '';

  onSearchTable(myTable) {
    let tempArry=[];
    this.fieldsArray=[];
    this.dataArray=[];
    this.search={};

    switch(myTable)
    {
      case 'Associates':
        tempArry=this.globalsearchService.getAssociates();
        break;
      case 'Companies':
        tempArry=this.globalsearchService.getCompanies();
        break;
      case 'Items':
        tempArry=this.globalsearchService.getItems();
        break;
    }
    this.fieldsArray = Object.keys(tempArry[0]);
    this.dataArray = tempArry;
  }

  onSubmit(mySearch) {    
    if (mySearch.table_Value === 'Select Table' && mySearch.text_value === '') {
      this.errorMsg = "Please provide field and serch text";
    } else {
      let filArray = [];
      for (let data of this.dataArray) {
        var re = new RegExp(mySearch.text_value, 'gi');
        //not working for numbers...
        //if (data[mySearch.field_Value].match(re)) {
          if(data[mySearch.field_Value].match('^.*'+mySearch.text_value+'.*$')){
          filArray.push(data);
        }
      }
      this.dataArray = filArray;
    }
  }

  removeAssociate(data){
    console.log(data);
  }


  onSelectField(field){
    alert(field);
  }



  //at first it is reversing--problem
  //Sorting logic starts here...  
  sortToggle:boolean=false;
  col_name='';   
  onSortField(field){
    if((this.col_name===field && this.sortToggle==true) || this.col_name=='')
    {this.sortToggle=false;} else {this.sortToggle=true;}      

    let isColString:any;
    for(let name of this.dataArray){
      isColString=name[field];
    }   

    if(isNaN(isColString)){ //if string
      if(this.sortToggle==false){
        //sorting string start...
        this.dataArray.sort(function(a, b) {           
        var nameA = a[field].toUpperCase(); // ignore upper and lowercase
        var nameB = b[field].toUpperCase(); // ignore upper and lowercase
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
      this.dataArray.reverse();
    } 
    //sorting string end...
  }else{ //if number
      if(this.sortToggle==false){
        this.dataArray.sort(function (a, b) {
        return b[field] - a[field];
      });
      } else{
        this.dataArray.sort(function (a, b) {
        return a[field] - b[field];
        });
      }    
    }        
    this.col_name=field;          
  }
  //Sorting logic ends here...

  
}
