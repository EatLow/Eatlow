import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	// { path: 'test', loadChildren: () => import('./pages/pageExemple/page-exemple.module').then(m => m.PageExempleModule) },
	{ path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
	{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
	{ path: 'plat', loadChildren: () => import('./pages/plat/plat.module').then(m => m.PlatModule) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
