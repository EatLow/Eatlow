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
    return new SubGroup(subGroup.id, subGroup.name)
  }
}
