import { SelectMealRoutingModule } from './select-meal-routing.module';
import { SelectMealComponent } from './select-meal.component';
import { TitleComponent } from './components/title/title.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SelectMealComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SelectMealRoutingModule
  ]
})
export class AccueilModule { }
