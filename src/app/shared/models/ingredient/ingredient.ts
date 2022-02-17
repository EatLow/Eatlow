import { IEnergyCost } from '../energyCost/energy-cost';
import { ISubGroup } from '../subGroup/sub-group';

export interface IIngrdient
{
    id: number;
    name: string;
    dqr: number;
    subGroup: ISubGroup;
    energyCost: IEnergyCost
}

export class Ingredients implements IIngrdient
{
    constructor(
        public id: number,
        public name: string,
        public dqr: number,
        public subGroup: ISubGroup,
        public energyCost: IEnergyCost) { }
}
