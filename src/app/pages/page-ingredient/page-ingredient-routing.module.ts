import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageIngredientComponent } from './page-ingredient.component';

const routes: Routes = [
  { path: ':id', component: PageIngredientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageIngredientRoutingModule { }
