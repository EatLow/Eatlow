import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsNotLoggedInGuard } from './shared/guards/is-not-logged-in.guard';


const routes: Routes = [
	{ path: '', loadChildren: () => import('./pages/accueil/accueil.module').then(m => m.AccueilModule) },
	{ path: 'register', canActivate: [IsNotLoggedInGuard], loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
	{ path: 'login', canActivate: [IsNotLoggedInGuard], loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
	{ path: 'plat', loadChildren: () => import('./pages/plat/plat.module').then(m => m.PlatModule) },
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
