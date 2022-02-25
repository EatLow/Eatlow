import { EnergyCost, IEnergyCost } from '../energyCost/energy-cost';
import { ISubGroup } from '../subGroup/sub-group';

export interface IIngredient {
    id: number;
    name: string;
    dqr: number;
    subGroup: ISubGroup;
    energyCost: IEnergyCost;
}

export class Ingredient implements IIngredient {
    energyCost: EnergyCost;
    constructor(
        public id: number,
        public name: string,
        public dqr: number,
        public subGroup: ISubGroup,
        energyCost: IEnergyCost) {
        this.energyCost = new EnergyCost(
            energyCost.id,
            energyCost.agriculture,
            energyCost.transformation,
            energyCost.packaging,
            energyCost.transport,
            energyCost.supermarket,
            energyCost.consomation
        );
    }

    get ecoScore(): number {
        return this.energyCost.agriculture + this.energyCost.transformation + this.energyCost.supermarket + this.energyCost.packaging + this.energyCost.transport + this.energyCost.consomation;
    }
}
