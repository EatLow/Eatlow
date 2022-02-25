import { Component, Input, OnInit } from '@angular/core';
import { IConsumable } from 'src/app/shared/models/consumable/IConsumable';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss']
})
export class HistoryItemComponent implements OnInit
{
  @Input()
  public consomation!: IConsumable;
  constructor() { }

  ngOnInit(): void
  {
  }

}
