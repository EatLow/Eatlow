import { ISubGroup } from '../subGroup/sub-group';

export interface IGroup
{
    id: number;
    name: string;
    subGroups: ISubGroup[];
}
export class Group implements IGroup
{
    constructor(
        public id: number,
        public name: string,
        public subGroups: ISubGroup[]) { }
}
