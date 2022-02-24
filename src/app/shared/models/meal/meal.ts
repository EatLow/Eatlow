import { EnergyCost, IEnergyCost } from '../energyCost/energy-cost';
import { IIngredient } from '../ingredient/ingredient';
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
        public ingredients: IIngredient[],
        public otherStepCost: number) { }

    get energyCost(): EnergyCost {
        return new EnergyCost(this.totalStep('agriculture'), this.totalStep('transformation'), this.totalStep('packaging'), this.totalStep('transport'), this.totalStep('supermarket'), this.totalStep('consomation'));
    }

    private totalStep(step: keyof IEnergyCost): number {
        const acc: IIngredient = this.ingredients.reduce((acc: IIngredient, curr: IIngredient) => {
            acc.energyCost[step] += curr.energyCost[step]!;
            return acc;
        });
        return acc.energyCost[step]! / this.ingredients.length;
    }
}
