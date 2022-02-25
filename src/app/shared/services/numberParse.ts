export class NumberParse {
    static shortenedNumber(n:number):number {
        return  Math.trunc(n * 100) / 100;
    }
}