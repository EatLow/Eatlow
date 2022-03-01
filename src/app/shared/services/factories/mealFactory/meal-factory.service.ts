import { Injectable } from '@angular/core';

import { IIngredient, Ingredient } from '../../../models/ingredient/ingredient';
import { IMeal, Meal } from '../../../models/meal/meal';
import { SubGroup } from '../../../models/subGroup/sub-group';
import { IngredientFactory } from '../ingredientFactory/ingredient-factory.service';
import { SubGroupFactory } from '../subGroupFactory/sub-group-factory.service';

@Injectable({
	providedIn: 'root'
})
export class MealFactory
{

	constructor(
		private _subGroupFactory: SubGroupFactory,
		private _ingredientFactory: IngredientFactory
	) { }
	public getMeal(meal: IMeal): Meal
	{
		const subGroup: SubGroup = this._subGroupFactory.getSubGroup(meal.subGroup);
		const ingredients: Ingredient[] = meal.ingredients.map((ingredient: IIngredient) => this._ingredientFactory.getIngredient(ingredient))
		return new Meal(
			meal.id,
			meal.name,
			subGroup,
			ingredients,
			meal.otherStepCost
		)
	}
}
