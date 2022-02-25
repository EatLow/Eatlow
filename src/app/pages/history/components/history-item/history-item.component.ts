import { Component, Input, OnInit } from '@angular/core';
import { IConsumable } from 'src/app/shared/models/consumable/IConsumable';
import { EnergyCost } from 'src/app/shared/models/energyCost/energy-cost';

import { Ingredient } from '../../../../shared/models/ingredient/ingredient';
import { SubGroup } from '../../../../shared/models/subGroup/sub-group';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss']
})
export class HistoryItemComponent implements OnInit
{
  // @Input()
  // public consomation!: (IMeal | IIngredient)
  @Input()
  public consomation: IConsumable = new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5))

  constructor() { }

  ngOnInit(): void
  {
  }

}
