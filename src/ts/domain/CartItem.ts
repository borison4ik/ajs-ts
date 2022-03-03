import Buyable from './Buyable';

export default class CartItem {
  public good: Buyable
  public count: number
  constructor(good: Buyable, count: number) {
      this.good = good;
      this.count = count;
    }
}