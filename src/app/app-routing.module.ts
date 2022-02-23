import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';

import { IsNotLoggedInGuard } from './shared/guards/is-not-logged-in.guard';


const routes: Routes = [
  { path: 'acc', loadChildren: () => import('./pages/accueil/accueil.module').then(m => m.AccueilModule) },
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
