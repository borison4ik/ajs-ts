import Cart from '../service/Cart';
import CartItem from '../domain/CartItem';
import Buyable from '../domain/Buyable';
import Smartphone from '../domain/Smartphone';
import Book from '../domain/Book';

describe('Cart', () => {
  test('new card should be empty', () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
  });

  test('add function should add cartItem object Stackable', () => {
    const cart = new Cart();
    cart.add(new Smartphone(333, 'Iphone', 50000, '5s'));
    const caseItems = [{
      good: {
          "id": 333,
          "name": "Iphone",
          "price": 50000,
          "model": "5s"
      },
      count: 1
    }];

    expect(cart.items).toEqual(caseItems);
  });

  test('add function should stack cartItem object like Stackable', () => {
    const cart = new Cart();
    cart.add(new Smartphone(333, 'Iphone', 50000, '5s'));
    cart.add(new Smartphone(333, 'Iphone', 50000, '5s'));
    cart.add(new Smartphone(333, 'Iphone', 50000, '5s'));
    const caseItems = [{
      good: {
          "id": 333,
          "name": "Iphone",
          "price": 50000,
          "model": "5s"
      },
      count: 3
    }];

    expect(cart.items).toEqual(caseItems);
    expect(cart.total()).toBe(150000);
    expect(cart.discountTotal(0.5)).toBe(75000);
  });

  test('add function should add cartItem object not Stackable', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1000, 1225));
    const caseItems = [{
      good: {
          "id": 1001,
          "name": "War and Piece",
          "author": "Leo Tolstoy",
          "price": 1000,
          "pages": 1225
      },
      count: 1
    }];

    expect(cart.items).toEqual(caseItems);
    expect(cart.total()).toBe(1000);
    expect(cart.discountTotal(0.5)).toBe(500);
  });

  test('add function should delete cartItem from Cart', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1000, 1225));
    cart.add(new Smartphone(333, 'Iphone', 50000, '5s'));
    cart.delete(333);

    const caseItems = [{
      good: {
          "id": 1001,
          "name": "War and Piece",
          "author": "Leo Tolstoy",
          "price": 1000,
          "pages": 1225
      },
      count: 1
    }];

    expect(cart.items).toEqual(caseItems);
  });
});
