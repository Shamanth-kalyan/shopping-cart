class CartService {
  getCartItems = () => {
    return fetch('/shopping-cart/cart-items.json').then((res) => res.json());
  };
}

export const cartService = new CartService();
