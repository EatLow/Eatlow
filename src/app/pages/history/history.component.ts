import { Component, OnInit } from '@angular/core';

import { IConsumable } from '../../shared/models/consumable/IConsumable';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit
{

  public consumables: IConsumable[] = []

  constructor() { }

  ngOnInit(): void
  {
  }

}
