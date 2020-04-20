import React from 'react';

export function ItemInfo({ brand_name, product_name, quantity, mrp, price }) {
  return (
    <div className="item-info">
      <span className="item-name">{brand_name}</span>
      <span>{product_name}</span>
      <span>{quantity}</span>
      <span>{mrp}</span>
      <span className="item-price">{price}</span>
    </div>
  );
}
