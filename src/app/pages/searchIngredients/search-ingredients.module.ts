import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchIngredientsComponent } from './search-ingredients.component';
import { RouterModule } from '@angular/router';
import { SearchRoutingModule } from './search-ingredients-routing.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';



@NgModule({
  declarations: [
    SearchIngredientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchRoutingModule,
    SharedComponentsModule,



  ]})

export class SearchIngredientsModule { }
