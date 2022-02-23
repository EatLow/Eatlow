import { SelectMealComponent } from './select-meal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{ path: '', component: SelectMealComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: []
})
export class SelectMealRoutingModule { }
