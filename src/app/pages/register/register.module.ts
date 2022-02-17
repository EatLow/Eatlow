import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';



@NgModule({
	declarations: [
		RegisterComponent
	],
	imports: [
		CommonModule,
		RegisterRoutingModule,
		SharedComponentsModule
	]
})
export class RegisterModule { }
