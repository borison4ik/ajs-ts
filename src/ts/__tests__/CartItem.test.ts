import CartItem from '../domain/CartItem';
import Smartphone from '../domain/Smartphone';

describe('CartItem', () => {
  const caseCartItem = {
    good: {
        "id": 333,
        "name": "Iphone",
        "price": 50000,
        "model": "5s"
    },
    count: 1
  };

  test('should return a smartfone object', () => {
    expect(new CartItem(new Smartphone(333, 'Iphone', 50000, '5s'), 1)).toEqual(caseCartItem);
  });
});