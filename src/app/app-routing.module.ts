import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{ path: 'test', loadChildren: () => import('./pages/pageExemple/page-exemple.module').then(m => m.PageExempleModule) },
	{ path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
