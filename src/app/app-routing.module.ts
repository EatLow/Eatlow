import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsLoggedInGuard } from './shared/guards/is-logged-in.guard';
import { IsNotLoggedInGuard } from './shared/guards/is-not-logged-in.guard';


const routes: Routes = [
	{ path: '', loadChildren: () => import('./pages/accueil/accueil.module').then(m => m.AccueilModule) },
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
	{
		path: 'history',
		canActivate: [IsLoggedInGuard],
		loadChildren: () =>
			import('./pages/history/history.module')
				.then(m => m.HistoryModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
