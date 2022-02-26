import { IConsumable } from '../consumable/IConsumable';
import { IEnergyCost } from '../energyCost/energy-cost';
import { ISubGroup } from '../subGroup/sub-group';

export interface IIngredient
{
    id: number;
    name: string;
    dqr: number;
    subGroup: ISubGroup;
    energyCost: IEnergyCost;
}

export class Ingredient implements IIngredient, IConsumable
{
    constructor(
        public id: number,
        public name: string,
        public dqr: number,
        public subGroup: ISubGroup,
        public energyCost: IEnergyCost
    )
    { }

    get subGroupName(): string
    {
        return this.subGroup.name;
    }

    get ecoScore(): number
    {
        return this.energyCost.agriculture + this.energyCost.transformation + this.energyCost.supermarket + this.energyCost.packaging + this.energyCost.transport + this.energyCost.consomation
    };
}
