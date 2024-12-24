import { Cart } from "./cart";
import { Movie } from "./movie";

describe("Cart", () => {
  let cart: Cart;
  let movie1: Movie;
  let movie2: Movie;

  beforeEach(() => {
    cart = new Cart();
    movie1 = new Movie("1", "Inception", "Christopher Nolan", 2010, 10);
    movie2 = new Movie("2", "Interstellar", "Christopher Nolan", 2014, 15);
  });

  test("should add items to the cart", () => {
    cart.addItem(movie1);
    expect(cart.getItems()).toContain(movie1);
  });

  test("should remove items from the cart", () => {
    cart.addItem(movie1);
    cart.addItem(movie2);
    cart.removeItem(movie1.id);
    expect(cart.getItems()).not.toContain(movie1);
  });

  test("should calculate total price", () => {
    cart.addItem(movie1);
    cart.addItem(movie2);
    expect(cart.getTotalPrice()).toBe(25);
  });

  test("should calculate total price with discount", () => {
    cart.addItem(movie1);
    cart.addItem(movie2);
    expect(cart.getTotalPriceWithDiscount(20)).toBe(20);
  });
});
