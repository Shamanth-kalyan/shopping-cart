import React, { useState } from 'react';

// custom component
import { Order } from '../components/order';

export function Checkout({ quantity, total, cartItems, resetCartItems }) {
  const [modelOpen, setModelOpen] = useState(false);

  function toggleOrderModal() {
    if (modelOpen) {
      resetCartItems();
    }
    setModelOpen(!modelOpen);
  }

  return (
    <div className="checkout-detail">
      <div>
        <span>Qty: {quantity}</span>
        <span>Total: {total}</span>
      </div>
      <button onClick={toggleOrderModal}>Checkout</button>
      {modelOpen && (
        <Order
          total={total}
          cartItems={cartItems}
          toggleOrderModal={() => toggleOrderModal()}
        />
      )}
    </div>
  );
}
