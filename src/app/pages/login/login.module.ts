import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
