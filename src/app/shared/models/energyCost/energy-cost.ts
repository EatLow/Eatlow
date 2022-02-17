export interface IEnergyCost
{
    id: number;
    agriculture: number;
    transformation: number;
    packaging: number;
    transport: number;
    supermarket: number;
    consomation: number;
}

export class EnergyCost implements IEnergyCost
{
    constructor(
        public id: number,
        public agriculture: number,
        public transformation: number,
        public packaging: number,
        public transport: number,
        public supermarket: number,
        public consomation: number) { }
}
