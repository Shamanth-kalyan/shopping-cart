import React from 'react';

// custom component
import { CartDetails } from './cart-details';
import { Checkout } from './checkout';

// custom services
import { cartService } from '../services/cart-service';

// custom styles
import '../asset/style/style.css';
import '../asset/style/respnsive.css';

export class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingItems: [],
      cartItems: [],
      quantity: 0,
      total: 0,
    };
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    cartService.getCartItems().then((res) => {
      const cartData = res.data.map((data) => {
        return {
          ...data,
          itemCount: 0,
          total: 0,
        };
      });
      this.setState({
        shoppingItems: cartData,
      });
    });
  }

  addCartItems(item) {
    const cartItems = this.state.cartItems.filter(
      (i) => i.brandName !== item.brandName
    );
    cartItems.push(item);
    return cartItems;
  }

  setItemQuantity(item) {
    return this.state.shoppingItems.map((data) => {
      if (data.brand_name === item.brandName) {
        data.itemCount = item.itemCount;
      }
      return data;
    });
  }

  increment(itemDetail) {
    this.setState((prevState) => ({
      shoppingItems: this.setItemQuantity(itemDetail),
      quantity: prevState.quantity + 1,
      total: prevState.total + itemDetail.price,
      cartItems: this.addCartItems(itemDetail),
    }));
  }

  decrement(itemDetail) {
    this.setState((prevState) => ({
      shoppingItems: this.setItemQuantity(itemDetail),
      quantity: prevState.quantity - 1,
      total: prevState.total - itemDetail.price,
      cartItems: this.addCartItems(itemDetail),
    }));
  }

  resetCartItems() {
    this.setState({
      ...this.state,
      cartItems: [],
      quantity: 0,
      total: 0,
    });
    this.getCartItems();
  }

  render() {
    return (
      <div className="shopping-cart">
        {this.state.shoppingItems.map((items, index) => {
          return (
            <CartDetails
              increment={(itemdetail) => this.increment(itemdetail)}
              decrement={(itemdetail) => this.decrement(itemdetail)}
              key={index}
              {...items}
            ></CartDetails>
          );
        })}
        <Checkout
          quantity={this.state.quantity}
          total={this.state.total}
          cartItems={this.state.cartItems}
          resetCartItems={() => this.resetCartItems()}
        ></Checkout>
      </div>
    );
  }
}
