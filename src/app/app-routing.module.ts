import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartDoughnutComponent } from './shared/components/chart-doughnut/chart-doughnut.component';


const routes: Routes = [
	{ path: 'test', loadChildren: () => import('./pages/pageExemple/page-exemple.module').then(m => m.PageExempleModule) },
	{ path: 'doug', component: ChartDoughnutComponent  }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
