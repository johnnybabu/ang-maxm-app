import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { routing } from './app.route';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { ArraySortPipe } from './sort.pipe';
import { Filter } from './filter.pipe';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user/user-edit.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { ServerCommnComponent } from './server-commn.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    TemplateDrivenComponent,
    DataDrivenComponent,
    ServerCommnComponent,
    OtherComponent,
    ArraySortPipe,
    Filter
  ],
  imports: [
    BrowserModule,routing,NgbModule,NgbModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapModalModule,
    FormsModule,ReactiveFormsModule,
    HttpModule,JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
