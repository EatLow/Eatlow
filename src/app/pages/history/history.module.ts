import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { HistoryEmptyComponent } from './components/history-empty/history-empty.component';
import { HistoryItemComponent } from './components/history-item/history-item.component';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';


@NgModule({
  declarations: [
    HistoryComponent,
    HistoryListComponent,
    HistoryItemComponent,
    HistoryEmptyComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedComponentsModule
  ]
})
export class HistoryModule { }
