import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubTitleComponent } from 'src/app/shared/components/sub-title/sub-title.component';
import { ChartDoughnutComponent } from './chart-doughnut/chart-doughnut.component';

import { ConnectionButtonComponent } from './connection-button/connection-button.component';
import { TitleComponent } from './title/title.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    TitleComponent,
    SubTitleComponent,
    ConnectionButtonComponent,
    SearchBarComponent,
    ChartDoughnutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    SubTitleComponent,
    ConnectionButtonComponent,
    SearchBarComponent,
    ChartDoughnutComponent
  ]
})
export class SharedComponentsModule { }
