import React from 'react';

// custom component
import { ItemInfo } from './item-info';
import { ItemImage } from './item-image';
import { ItemCounter } from './item-counter';

export function CartDetails(props) {
  const { image_url, offer_text, increment, decrement, ...rest } = props;
  const itemDetail = {
    price: rest.price,
    quantity: rest.quantity,
    brandName: rest.brand_name,
    itemCount: rest.itemCount,
  };

  return (
    <div className="cart-item">
      <div className="item-img-offer">
        <ItemImage imageUrl={image_url} />
        <span>{offer_text}</span>
      </div>
      <div className="item-detail">
        <ItemInfo {...rest} />
        <ItemCounter
          increment={increment}
          decrement={decrement}
          itemDetail={itemDetail}
        ></ItemCounter>
      </div>
    </div>
  );
}
