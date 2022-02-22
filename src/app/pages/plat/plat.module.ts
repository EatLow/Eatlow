import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatRoutingModule } from './plat-routing.module';
import { PlatComponent } from './plat.component';


@NgModule({
  declarations: [
    PlatComponent
  ],
  imports: [
    CommonModule,
    PlatRoutingModule
  ]
})
export class PlatModule { }
