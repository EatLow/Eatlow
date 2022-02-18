import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
	{ path: 'test', loadChildren: () => import('./pages/pageExemple/page-exemple.module').then(m => m.PageExempleModule) }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
