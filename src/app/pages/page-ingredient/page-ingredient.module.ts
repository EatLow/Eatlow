import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageIngredientRoutingModule } from './page-ingredient-routing.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { PageIngredientComponent } from './page-ingredient.component';


@NgModule({
  declarations: [PageIngredientComponent],
  imports: [
    CommonModule,
    PageIngredientRoutingModule,
    SharedComponentsModule
  ]
})
export class PageIngredientModule { }
