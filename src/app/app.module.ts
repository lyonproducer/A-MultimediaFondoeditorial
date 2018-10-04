//Modulos
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {ModalModule} from "ngx-modal";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MatDialogRef} from '@angular/material';

//Services
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CategoriesComponent } from './components/admin/categories/categories-list/categories-list.component';
import { CategoriesViewComponent } from './components/admin/categories/categories-view/categories-view.component';
import { CategoriesFormComponent } from './components/admin/categories/categories-form/categories-form.component';
import { WorkdesignListComponent } from './components/home/workdesign-list/workdesign-list.component';

import { WorkdesignsTableComponent } from './components/admin/workdesigns/workdesigns-table/workdesigns-table.component';
import { WorkdesignsFormComponent } from './components/admin/workdesigns/workdesigns-form/workdesigns-form.component';
import { WorkdesignsViewComponent } from './components/admin/workdesigns/workdesigns-view/workdesigns-view.component';
import { WorksListComponent } from './components/admin/workdesigns/workdesigns-view/works-list/works-list.component';
import { WorkFormComponent } from './components/admin/workdesigns/workdesigns-view/work-form/work-form.component';
import { WorkViewComponent } from './components/admin/workdesigns/workdesigns-view/work-view/work-view.component';
import { VariablesComponent } from './global/variables/variables.component';


const routes: Route[] = [
  //login Routes
  {path: 'login', component: LoginComponent, canActivate:[BeforeLoginService] },
  {path: 'signup', component: SignUpComponent, canActivate:[BeforeLoginService]},
  {path: 'profile', component: ProfileComponent, canActivate:[AfterLoginService]},
  {path: 'request-pass-reset', component: RequestResetComponent, canActivate:[BeforeLoginService]},
  {path: 'response-pass-reset', component: ResponseResetComponent, canActivate:[BeforeLoginService]},
  //categories Routes
  {path: 'categorias', component: CategoriesComponent, canActivate:[AfterLoginService]},
  {path: 'categorias/view', component: CategoriesViewComponent, canActivate:[AfterLoginService]},
  {path: 'categorias/create', component: CategoriesFormComponent, canActivate:[AfterLoginService]},
  //Home options
  {path: '', component: WorkdesignListComponent},
  {path: 'workdesign/:category', component: WorkdesignListComponent},
  //Diseños Routes
  {path: 'workdesigns', component: WorkdesignsTableComponent, canActivate:[AfterLoginService]},
  {path: 'workdesigns/view/:id/:title', component: WorkdesignsViewComponent, canActivate:[AfterLoginService]},
  {path: 'workdesigns/create', component: WorkdesignsFormComponent, canActivate:[AfterLoginService]},
  
];

@NgModule({
  entryComponents:[
    WorkFormComponent,
    WorkViewComponent
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ProfileComponent,
    CategoriesComponent,
    CategoriesViewComponent,
    CategoriesFormComponent,
    WorkdesignListComponent,
    WorkdesignsTableComponent,
    WorkdesignsFormComponent,
    WorkdesignsViewComponent,
    WorksListComponent,
    WorkFormComponent,
    WorkViewComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    {provide: MatDialogRef, useValue: {}},
    SnotifyService,
    Title,
    VariablesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
