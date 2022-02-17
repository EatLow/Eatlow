import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppModule } from '../../app.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AppModule
  ]
})
export class LoginModule { }
