import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageExempleRoutingModule } from './page-exemple-routing.module';
import { PageExempleComponent } from './page-exemple.component';


@NgModule({
	declarations: [
		PageExempleComponent
	],
	imports: [
		CommonModule,
		PageExempleRoutingModule
	],
})
export class PageExempleModule { }
