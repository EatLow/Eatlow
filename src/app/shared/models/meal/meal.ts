import { IIngrdient } from '../ingredient/ingredient';
import { ISubGroup } from '../subGroup/sub-group';

export interface IMeal
{
    id: number;
    name: string;
    subGroupMeal: ISubGroup;
    ingredients: IIngrdient[];
    otherStepCost: number;
}

export class Meal implements IMeal
{
    constructor(
        public id: number,
        public name: string,
        public subGroupMeal: ISubGroup,
        public ingredients: IIngrdient[],
        public otherStepCost: number) { }
}
