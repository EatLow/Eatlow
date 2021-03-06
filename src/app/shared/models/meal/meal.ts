import { IConsumable } from '../consumable/IConsumable';
import { EnergyCost, IEnergyCost } from '../energyCost/energy-cost';
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
        this.ingredients.forEach((ingredient) =>
        {
            ecoScore += ingredient.ecoScore;
        })
        ecoScore = ecoScore + this.otherStepCost;
        return ecoScore;
    }
    get energyCost(): EnergyCost
    {
        return new EnergyCost(this.id, this.totalStep('agriculture'), this.totalStep('transformation'), this.totalStep('packaging'), this.totalStep('transport'), this.totalStep('supermarket'), this.totalStep('consomation'));
    }
    private totalStep(step: keyof IEnergyCost): number
    {
        let total: number = 0;
        this.ingredients.forEach((ingredient: Ingredient) =>
        {
            total += ingredient.energyCost[step]!;
        });
        return total / this.ingredients.length;
    }
}
