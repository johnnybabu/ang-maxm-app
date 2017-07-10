import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user',
  template: `
  <h2>User Component</h2>
  <button (click)="onNavigate()">Go Home</button>
  <span>The id is {{id}}</span>
  <router-outlet></router-outlet>
  ` 
})
export class UserComponent {
  id:string;
constructor(private router:Router,private activatedRoute:ActivatedRoute){
  activatedRoute.params.subscribe(
    (param:any)=>this.id=param['id']
  );
}
onNavigate(){
  this.router.navigate(['/'],{queryParams:{'analytics':100}});
}
}
