import { IIngredient } from '../ingredient/ingredient';
import { IMeal } from '../meal/meal';

export interface IUser
{
    id: number;
    lastname: string;
    firstname: string;
    email: string;
    password: string;
    historyMeals: IMeal[];
    historyIngredients: IIngredient[];
}

export class User implements IUser
{
    constructor(
        public id: number,
        public lastname: string,
        public firstname: string,
        public email: string,
        public password: string,
        public historyMeals: IMeal[],
        public historyIngredients: IIngredient[])
    { }
}
