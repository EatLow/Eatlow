import { SharedComponentsModule } from './../../shared/components/shared-components.module';
import { SelectMealRoutingModule } from './select-meal-routing.module';
import { SelectMealComponent } from './select-meal.component';
import { TitleComponent } from './components/title/title.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MealComponent } from './components/meal/meal.component';

@NgModule({
  declarations: [
    SelectMealComponent,
    TitleComponent,
    MealComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SelectMealRoutingModule,
    SharedComponentsModule
  ]
})
export class SelectMealModule { }
