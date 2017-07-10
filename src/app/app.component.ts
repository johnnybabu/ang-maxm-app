import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maxm Ang App';
  param:string;
  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(
      (param:any)=>this.param=param['analytics']
    );
  }
}
