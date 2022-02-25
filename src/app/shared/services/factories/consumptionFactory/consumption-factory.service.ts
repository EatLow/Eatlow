import { Injectable } from '@angular/core';

import { IConsumable } from '../../../models/consumable/IConsumable';
import { IIngredient, Ingredient } from '../../../models/ingredient/ingredient';
import { IMeal, Meal } from '../../../models/meal/meal';
import { IngredientFactory } from '../ingredientFactory/ingredient-factory.service';
import { MealFactory } from '../mealFactory/meal-factory.service';

@Injectable({
    providedIn: 'root'
})
export class ConsumptionFactory
{
    private _consumables: IConsumable[] = []
    constructor(
        private _mealFactory: MealFactory,
        private _ingredientFactory: IngredientFactory
    )
    { }

    public getConsumable(meals: IMeal[], ingredients: IIngredient[]): IConsumable[]
    {
        this.setMeals(meals);
        this.setIngredients(ingredients);
        return this._consumables;
    }

    private setMeals(meals: IMeal[]): void
    {
        for (const meal of meals)
        {
            const m: Meal = this._mealFactory.getMeal(meal);
            this._consumables.push(m);
        }
    }
    private setIngredients(ingredients: IIngredient[]): void
    {
        for (const ingredient of ingredients)
        {
            const i: Ingredient = this._ingredientFactory.getIngredient(ingredient);
            this._consumables.push(i);
        }
    }
}
