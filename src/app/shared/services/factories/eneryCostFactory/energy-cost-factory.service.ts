import { Injectable } from '@angular/core';

import { EnergyCost, IEnergyCost } from '../../../models/energyCost/energy-cost';


@Injectable({
  providedIn: 'root'
})
export class EnergyCostFactory
{

  constructor() { }

  getEnergyCost(eneryCost: IEnergyCost): EnergyCost
  {
    return new EnergyCost(eneryCost.id, eneryCost.agriculture, eneryCost.transformation, eneryCost.packaging, eneryCost.transformation, eneryCost.supermarket, eneryCost.consomation)
  }
}
