export interface IEnergyCost
{
    agriculture: number;
    transformation: number;
    packaging: number;
    transport: number;
    supermarket: number;
    consomation: number;
    id?: number;
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
        public consomation: number
    ) { }

    public get ecoScore(): number
    {
        return this.agriculture + this.transformation + this.supermarket + this.packaging + this.transport + this.consomation;
    };
}
