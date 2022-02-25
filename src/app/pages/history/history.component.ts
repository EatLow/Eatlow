import { Component, OnInit } from '@angular/core';
import { EnergyCost } from 'src/app/shared/models/energyCost/energy-cost';
import { SubGroup } from 'src/app/shared/models/subGroup/sub-group';

import { IConsumable } from '../../shared/models/consumable/IConsumable';
import { Ingredient } from '../../shared/models/ingredient/ingredient';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit
{

  public consumables: IConsumable[] =
    [
      new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5)),
      new Ingredient(5, 'Tacos 17 viandes', 5, new SubGroup(4, "Malbouff"), new EnergyCost(27, 5, 5, 5, 5, 5, 5))
    ]

  constructor() { }

  ngOnInit(): void
  {
  }

}
