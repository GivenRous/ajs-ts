import Cart from "../service/Cart";
import Movie from "../domain/Movie";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";

test("new card should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("добавление товаров в корзину", () => {
  const cart = new Cart();
  const book = new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, "Meteora", "Linkin Park", 900);
  const movie = new Movie(
    1010,
    "The Avengers",
    2012,
    550,
    "USA",
    137,
    "Avengers Assemble!",
    "фантистика, боевик, фэнтези, приключения"
  );

  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);

  expect(cart.items.length).toBe(3);
  expect(cart.items).toContain(book);
  expect(cart.items).toContain(musicAlbum);
  expect(cart.items).toContain(movie);
});

test("суммарная стоимость без скидки", () => {
  const cart = new Cart();
  const book = new Book(1001, "War and Peace", "Leo Tolstoy", 1225, 2000);
  const musicAlbum = new MusicAlbum(1008, "Meteora", "Linkin Park", 900);
  const movie = new Movie(
    1010,
    "The Avengers",
    2012,
    550,
    "USA",
    137,
    "Avengers Assemble!",
    "фантистика, боевик, фэнтези, приключения"
  );

  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);

  expect(cart.sum()).toBe(2675);
});

test("суммарная стоимость со скидкой", () => {
  const cart = new Cart();
  const book = new Book(1001, "War and Peace", "Leo Tolstoy", 1225, 2000);
  const musicAlbum = new MusicAlbum(1008, "Meteora", "Linkin Park", 900);
  const movie = new Movie(
    1010,
    "The Avengers",
    2012,
    550,
    "USA",
    137,
    "Avengers Assemble!",
    "фантистика, боевик, фэнтези, приключения"
  );

  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);

  expect(cart.totalSum(50)).toBe(1337.5);
});

test("удаление товара по id", () => {
  const cart = new Cart();
  const book = new Book(1001, "War and Peace", "Leo Tolstoy", 1225, 2000);
  const musicAlbum = new MusicAlbum(1008, "Meteora", "Linkin Park", 900);
  const movie = new Movie(
    1010,
    "The Avengers",
    2012,
    550,
    "USA",
    137,
    "Avengers Assemble!",
    "фантистика, боевик, фэнтези, приключения"
  );

  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);

  cart.removeItem(1008);

  expect(cart.items.length).toBe(2);
  expect(cart.items).toContain(book);
  expect(cart.items).not.toContain(musicAlbum);
  expect(cart.items).toContain(movie);
});
