import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { HistoryItemComponent } from './components/history-item/history-item.component';


@NgModule({
  declarations: [
    HistoryComponent,
    HistoryListComponent,
    HistoryItemComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedComponentsModule
  ]
})
export class HistoryModule { }
