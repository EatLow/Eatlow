import { Injectable } from '@angular/core';
import { IIngredient } from 'src/app/shared/models/ingredient/ingredient';

import { EnergyCost } from '../../../models/energyCost/energy-cost';
import { Ingredient } from '../../../models/ingredient/ingredient';
import { SubGroup } from '../../../models/subGroup/sub-group';
import { EnergyCostFactory } from '../eneryCostFactory/energy-cost-factory.service';
import { SubGroupFactory } from '../subGroupFactory/sub-group-factory.service';


@Injectable({
    providedIn: 'root'
})
export class IngredientFactory
{

    constructor(
        private _energyCostFactory: EnergyCostFactory,
        private _subGroupFactory: SubGroupFactory
    ) { }

    public getIngredient(ingredient: IIngredient): Ingredient
    {
        const energyCost: EnergyCost = this._energyCostFactory.getEnergyCost(ingredient.energyCost);
        const subGroup: SubGroup = this._subGroupFactory.getSubGroup(ingredient.subGroup);
        return new Ingredient(
            ingredient.id,
            ingredient.name,
            ingredient.dqr,
            subGroup,
            energyCost);
    }
}
