import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
		SharedComponentsModule
	]
})
export class RegisterModule { }
