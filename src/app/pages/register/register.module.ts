import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConnectionButtonComponent } from 'src/app/shared/components/connection-button/connection-button.component';
import { TitleComponent } from 'src/app/shared/components/title/title.component';

import { SubTitleComponent } from '../../shared/components/sub-title/sub-title.component';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';



@NgModule({
	declarations: [
		RegisterComponent,
		TitleComponent,
		SubTitleComponent,
		ConnectionButtonComponent
	],
	imports: [
		CommonModule,
		RegisterRoutingModule
	]
})
export class RegisterModule { }
