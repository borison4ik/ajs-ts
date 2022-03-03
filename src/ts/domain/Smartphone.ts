import Buyable from './Buyable';
import Stackable from './Stackable';

export default class Smartphone extends Stackable implements Buyable{
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly model: string,
  ) {
    super();
  }
}