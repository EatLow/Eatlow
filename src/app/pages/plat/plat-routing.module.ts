import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatComponent } from './plat.component';

const routes: Routes = [
  { path: '', component: PlatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatRoutingModule { }
