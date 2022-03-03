import Buyable from './Buyable';

export default class Movie implements Buyable{
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly year: Date,
    readonly counrty: string,
    readonly slogan: string,
    readonly genre: string[],
    readonly time: number,
  ) {}
}