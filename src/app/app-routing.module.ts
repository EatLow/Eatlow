import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ChartDoughnutComponent } from './shared/components/chart-doughnut/chart-doughnut.component';
=======
import { HeaderComponent } from './shared/components/header/header.component';
>>>>>>> b9359a6e88ad82ce04d03def0bdbde03491b4805


const routes: Routes = [
	// { path: 'test', loadChildren: () => import('./pages/pageExemple/page-exemple.module').then(m => m.PageExempleModule) },
	{ path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
	{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
	{ path: 'doug', component: ChartDoughnutComponent  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
