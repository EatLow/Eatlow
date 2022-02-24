import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatRoutingModule } from './plat-routing.module';
import { PlatComponent } from './plat.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { IngredientDetailComponent } from './components/ingredient-detail/ingredient-detail.component';


@NgModule({
  declarations: [
    PlatComponent,
    IngredientDetailComponent
  ],
  imports: [
    CommonModule,
    PlatRoutingModule,
    SharedComponentsModule
  ]
})
export class PlatModule { }
