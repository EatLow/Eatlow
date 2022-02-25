import { Component, Input, OnInit } from '@angular/core';

import { IConsumable } from '../../../../shared/models/consumable/IConsumable';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit
{
  @Input()
  public consomations!: IConsumable[];

  constructor() { }

  ngOnInit(): void
  {
  }

}
