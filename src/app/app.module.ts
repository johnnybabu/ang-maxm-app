import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule,MdButtonModule, MdCheckboxModule} from '@angular/material';
import 'hammerjs';

import { routing } from './app.route';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { ArraySortPipe } from './sort.pipe';
import { Filter } from './filter.pipe';
import { Unique } from './pipes/unique.pipe';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user/user-edit.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { ServerCommnComponent } from './server-commn.component';
import { OtherComponent } from './other/other.component';

import { Demo1Component } from './demo1.component';
import { AdBannerComponent } from  './dynamic-comps/ad-banner.component';
import { HeroJobAdComponent }   from './dynamic-comps/hero-job-ad.component';
import { HeroProfileComponent } from './dynamic-comps/hero-profile.component';
import { AdDirective } from './dynamic-comps/ad.directive';
import { AdService } from './dynamic-comps/ad-service';
import { HeroChildComponent } from './comp-interaction/hero-child.component';
import { HeroParentComponent } from './comp-interaction/hero-parent.component';
import { NameChildComponent } from './comp-interaction/name-child.component';
import { VersionChildComponent } from './comp-interaction/version-child.component';
import { DynamicGridComponent } from './dynamic-grid/dynamic-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    TemplateDrivenComponent,
    DataDrivenComponent,
    ServerCommnComponent,
    //DialogResultExampleDialog,
    OtherComponent,
    ArraySortPipe,
    Filter,
    Unique,
    Demo1Component,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    VersionChildComponent,
    DynamicGridComponent
  ],
  imports: [
    BrowserModule,routing,NgbModule,NgbModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapModalModule,
    FormsModule,ReactiveFormsModule,
    HttpModule,JsonpModule,
    BrowserAnimationsModule,
    MdInputModule,MdButtonModule, MdCheckboxModule
  ],
  providers: [AdService],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
