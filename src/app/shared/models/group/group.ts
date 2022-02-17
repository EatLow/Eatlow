import { ISubGroup } from '../subGroup/sub-group';

export interface IGroup
{
    id: number;
    nom: string;
    subGroups: ISubGroup[];
}
export class Group implements IGroup
{
    constructor(
        public id: number,
        public nom: string,
        public subGroups: ISubGroup[]) { }
}
