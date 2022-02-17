export interface IUser
{
    id: number;
    lastname: string;
    firstname: string;
    email: string;
    password: string;
}

export class User implements IUser
{
    constructor(
        public id: number,
        public lastname: string,
        public firstname: string,
        public email: string,
        public password: string)
    { }
}
