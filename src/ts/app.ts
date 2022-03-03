import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Smartphone from './domain/Smartphone';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 1000));
cart.add(new Movie(1111, 'Мстители', 1000, new Date('2002-12-17'), 'США', 'Avenge Assigment!', ['фантастика', 'боевик', 'фентези'], 7200000));
cart.add(new Smartphone(123, 'Iphone', 50000, '5s'));
cart.add(new Smartphone(123, 'Iphone', 50000, '5s'));
cart.add(new Smartphone(123, 'Iphone', 50000, '5s'));
cart.add(new Smartphone(222, 'Iphone', 50000, '5s'));
cart.add(new Smartphone(333, 'Iphone', 50000, '5s'));

console.log(cart.delete(222));
console.log(cart.items);

console.log(cart.total());
console.log(cart.discountTotal(0.5));
