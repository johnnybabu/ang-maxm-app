import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.css']
})
export class DynamicGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  globalMenu: any = [
    { 'id': 1, 'name': 'Associates' },
    { 'id': 2, 'name': 'Companies' },
    { 'id': 3, 'name': 'Items' },
    { 'id': 4, 'name': 'Orders' },
    { 'id': 5, 'name': 'Web Logins' }
  ];
  Associates: any = [
    { 'assoc_id': 1234, 'firstName': 'Venkat', 'lastName': 'Kumar', 'email': 'venkat@gmai.com', 'phone': '8985839936' },
    { 'assoc_id': 1235, 'firstName': 'Meena', 'lastName': 'Kumari', 'email': 'Meenna@gmai.com', 'phone': '8985874487' },
    { 'assoc_id': 1236, 'firstName': 'Suresh', 'lastName': 'Kumar', 'email': 'suresh@gmai.com', 'phone': '9858536696' },
    { 'assoc_id': 1237, 'firstName': 'Kiran', 'lastName': 'Kumar', 'email': 'kiran@gmai.com', 'phone': '89858399345' },
    { 'assoc_id': 1238, 'firstName': 'nagendra', 'lastName': 'Kumar', 'email': 'nagendra@gmai.com', 'phone': '8945639936' },
    { 'assoc_id': 1239, 'firstName': 'Rachana', 'lastName': 'Kumari', 'email': 'rachana@gmai.com', 'phone': '8913249936' }
  ];
  Companies: any = [
    { 'comp_id': 353, 'name': 'oakridge It Solns', 'location': 'USA' },
    { 'comp_id': 354, 'name': 'VPDCS', 'location': 'Russia' },
    { 'comp_id': 355, 'name': 'Microsoft', 'location': 'USA' },
    { 'comp_id': 356, 'name': 'Google', 'location': 'Germany' },
    { 'comp_id': 357, 'name': 'Amazon', 'location': 'France' },
    { 'comp_id': 358, 'name': 'Facebook', 'location': 'France' },
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
    if (myTable === 'Associates') {
      this.fieldsArray = Object.keys(this.Associates[0]);
      this.dataArray = this.Associates;
    }
    if (myTable === 'Companies') {
      this.fieldsArray = Object.keys(this.Companies[0]);
      this.dataArray = this.Companies;
    }
  }

  onSubmit(mySearch) {
    console.log(mySearch);
    if (mySearch.table_Value === 'Select Table' && mySearch.text_value === '') {
      this.errorMsg = "Please provide field and serch text";
    } else {
      let filArray = [];
      for (let data of this.dataArray) {
        var re = new RegExp(mySearch.text_value, 'gi');
        //not working for numbers...
        if (data[mySearch.field_Value].match(re)) {
          filArray.push(data);
        }
      }
      this.dataArray = filArray;
    }
  }
}
