import Buyable from '../domain/Buyable';
import CartItem from '../domain/CartItem';
import Stackable from '../domain/Stackable';

export default class Cart {
    private _items: CartItem[] = [];

    add(item: Buyable): void {
        if(item instanceof Stackable) {
            // проверяем наличие и стакаем
            const findItem = this.findItem(item.id);
            if(findItem) {
                findItem.count += 1;
            } else {
                this._items.push(new CartItem(item, 1));
            }
        } else {
            this._items.push(new CartItem(item, 1));
        }
    }

    get items(): CartItem[] {
        return [...this._items]; 
    }

    total(): number {
        return this._items.reduce((total, item) => {
            return total + (item.good.price * item.count);
        }, 0);
    }

    discountTotal(discount: number): number {
        return this.total() * discount;
    }

    findItem(id: number) : CartItem | undefined{
        return this._items.find(cartItem => cartItem.good.id === id);
    }

    delete(id: number): void {
        const findItem = this.findItem(id);
        if(findItem) {
            if(findItem.count > 1) {
                findItem.count = findItem.count - 1;
            } else {
                this._items = this._items.filter(cartItem => cartItem.good.id !== id);
            }
        }
    }
}