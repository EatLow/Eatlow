import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';



@NgModule({
	declarations: [
		RegisterComponent,
		RegisterFormComponent
	],
	imports: [
		CommonModule,
		RegisterRoutingModule,
		SharedComponentsModule,
		ReactiveFormsModule,
		RouterModule
	]
})
export class RegisterModule { }
