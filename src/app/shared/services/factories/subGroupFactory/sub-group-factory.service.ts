import { Injectable } from '@angular/core';

import { ISubGroup, SubGroup } from '../../../models/subGroup/sub-group';

@Injectable({
  providedIn: 'root'
})
export class SubGroupFactory
{

  constructor() { }

  public getSubGroup(subGroup: ISubGroup): SubGroup
  {
    if (!subGroup)
    {
      subGroup = { id: 999, name: 'inconnu' }
    }
    return new SubGroup(subGroup.id, subGroup.name)
  }
}
