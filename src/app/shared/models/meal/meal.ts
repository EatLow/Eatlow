import { IConsumable } from '../consumable/IConsumable';
import { IIngredient, Ingredient } from '../ingredient/ingredient';
import { ISubGroup } from '../subGroup/sub-group';

export interface IMeal
{
    id: number;
    name: string;
    subGroup: ISubGroup;
    ingredients: IIngredient[];
    otherStepCost: number;
}

export class Meal implements IMeal, IConsumable
{
    constructor(
        public id: number,
        public name: string,
        public subGroup: ISubGroup,
        public ingredients: Ingredient[],
        public otherStepCost: number) { }

    get subGroupName(): string
    {
        return this.subGroup.name;
    }

    get ecoScore(): number
    {
        let ecoScore: number = 0;
        if (this.ingredients.length == 0) return ecoScore;
        this.ingredients.forEach((ingredient) =>
        {
            ecoScore += ingredient.ecoScore;
        })
        ecoScore = ecoScore + this.otherStepCost;
        return ecoScore;
    }
}
