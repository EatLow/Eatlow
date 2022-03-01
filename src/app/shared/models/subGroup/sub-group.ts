export interface ISubGroup
{
    id: number;
    name: string;
}
export class SubGroup implements ISubGroup
{
    constructor(
        public id: number,
        public name: string) { }
}
