import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsNotLoggedInGuard } from './shared/guards/is-not-logged-in.guard';


const routes: Routes = [
	// {
	// 	path: 'test',
	// 	canActivate: [IsLoggedInGuard],
	// 	loadChildren: () => import('./pages/pageExemple/page-exemple.module')
	// 		.then(m => m.PageExempleModule)
	// },
	{
		path: 'register',
		canActivate: [IsNotLoggedInGuard],
		loadChildren: () =>
			import('./pages/register/register.module')
				.then(m => m.RegisterModule)
	},
	{
		path: 'login',
		canActivate: [IsNotLoggedInGuard],
		loadChildren: () =>
			import('./pages/login/login.module')
				.then(m => m.LoginModule)
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
