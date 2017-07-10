import { RouterModule,Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user/user-edit.component';
import { AppComponent } from "app/app.component";
import { ServerCommnComponent } from "app/server-commn.component";

const APP_ROUTES:Routes = [
  {path:'user',redirectTo:'/user/1',pathMatch:'full'},
  {path:'user/:id',component:UserComponent},
  {path:'user/:id',component:UserComponent,children:[
    {path:'user-edit',component:UserDetailComponent}
  ]},
  {path:'user-detail',component:UserDetailComponent},
  {path:'user-edit',component:UserEditComponent},
  {path:'server-commn',component:ServerCommnComponent}
  //{path:'',component:AppComponent}
];

export const routing=RouterModule.forRoot(APP_ROUTES);
