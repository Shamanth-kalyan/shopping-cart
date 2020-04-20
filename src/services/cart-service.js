class CartService {
  getCartItems = () => {
    return fetch('/cart-items.json').then((res) => res.json());
  };
}

export const cartService = new CartService();
