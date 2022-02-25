import { AccueilComponent } from './accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{ path: '', component: AccueilComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: []
})
export class AccueilRoutingModule { }
