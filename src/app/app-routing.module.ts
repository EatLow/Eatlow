import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';


const routes: Routes = [
	{ path: 'test', loadChildren: () => import('./pages/pageExemple/page-exemple.module').then(m => m.PageExempleModule) },
  { path: 'acc', component: AccueilComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
