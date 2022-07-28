import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestoComponent } from './add-resto/add-resto.component';
import {UpdateRestoComponent } from './update-resto/update-resto.component';
import {LoginComponent } from './login/login.component';
import {RegistrationComponent } from './registration/registration.component';
import {ListRestoComponent } from './list-resto/list-resto.component';




const routes: Routes = [
  {
    component:AddRestoComponent,
    path:"Add"
  },
  { path:"", redirectTo:'login', pathMatch:'full'},
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:RegistrationComponent,
    path:"register"
  },
  {
    component:UpdateRestoComponent,
    path:"update/:id"
  },
  {
    component:ListRestoComponent,
    path:"list"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
