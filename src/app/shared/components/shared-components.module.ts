import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubTitleComponent } from 'src/app/shared/components/sub-title/sub-title.component';
import { ChartDoughnutComponent } from './chart-doughnut/chart-doughnut.component';

import { ConnectionButtonComponent } from './connection-button/connection-button.component';
import { ModalComponent } from './modal/modal.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    TitleComponent,
    SubTitleComponent,
    ConnectionButtonComponent,
    ChartDoughnutComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    SubTitleComponent,
    ConnectionButtonComponent,
    ChartDoughnutComponent,
    ModalComponent
  ]
})
export class SharedComponentsModule { }
