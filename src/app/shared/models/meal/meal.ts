import { EnergyCost, IEnergyCost } from '../energyCost/energy-cost';
import { IIngredient, Ingredient } from '../ingredient/ingredient';
import { ISubGroup } from '../subGroup/sub-group';

export interface IMeal {
    id: number;
    name: string;
    subGroupMeal: ISubGroup;
    ingredients: IIngredient[];
    otherStepCost: number;
}

export class Meal implements IMeal {
    constructor(
        public id: number,
        public name: string,
        public subGroupMeal: ISubGroup,
        public ingredients: Ingredient[],
        public otherStepCost: number) {
        this.ingredients = ingredients.map((ingredient: IIngredient) => {
            return new Ingredient(ingredient.id, ingredient.name, ingredient.dqr, ingredient.subGroup, ingredient.energyCost);
        })
    }

    get energyCost(): EnergyCost {
        return new EnergyCost(this.totalStep('agriculture'), this.totalStep('transformation'), this.totalStep('packaging'), this.totalStep('transport'), this.totalStep('supermarket'), this.totalStep('consomation'));
    }

    private totalStep(step: keyof IEnergyCost): number {
        let total: number = 0;
        this.ingredients.forEach((ingredient: Ingredient) => {
            total += ingredient.energyCost[step]!;
        });
        return total / this.ingredients.length;
    }
}
