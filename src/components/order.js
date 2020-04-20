import React from 'react';
import { createPortal } from 'react-dom';

const portal = document.getElementById('portal');

export class Order extends React.Component {
  constructor(props) {
    super(props);
    this.element = document.createElement('div');
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    portal.appendChild(this.element);
  }

  componentWillUnmount() {
    portal.removeChild(this.element);
    document.body.style.overflow = 'unset';
  }

  render() {
    return createPortal(
      <div className="order-detail">
        <div className="modal">
          <span className="close-icon" onClick={this.props.toggleOrderModal}>
            X
          </span>
          <h1>Order received successfully.</h1>
          <table>
            <thead>
              <tr>
                <th>Brand Name</th>
                <th>Price</th>
                <th>Item Count</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cartItems.map((items, index) => (
                <tr key={index}>
                  <td>{items.brandName}</td>
                  <td>{items.price}</td>
                  <td>{items.itemCount}</td>
                  <td>{items.price * items.itemCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-amount">Grand Total: {this.props.total}</div>
        </div>
      </div>,
      this.element
    );
  }
}
