export interface ISubGroup
{
    id: number;
    nom: string;
}
export class SubGroup implements ISubGroup
{
    constructor(
        public id: number,
        public nom: string) { }
}
