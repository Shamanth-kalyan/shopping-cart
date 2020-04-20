import React, { useEffect } from 'react';

// custom hook
import { useAsyncState } from '../hook/async-state';

export function ItemCounter({ increment, decrement, itemDetail }) {
  const initialState = {
    brandName: itemDetail.brandName,
    price: getPrice(itemDetail.price),
    itemCount: itemDetail.itemCount,
  };
  const [cartDetail, setCartDetail] = useAsyncState(initialState);

  useEffect(() => {
    setCartDetail(initialState);
  }, [itemDetail]);

  function getPrice(price) {
    return parseInt(price.replace(/[^0-9.]/g, ''), 10);
  }

  function countIncrement() {
    if (cartDetail.itemCount <= itemDetail.quantity - 1) {
      setCartDetail({
        ...cartDetail,
        itemCount: cartDetail.itemCount + 1,
      }).then((cartDetail) => increment(cartDetail));
    }
  }

  function countDecrement() {
    if (cartDetail.itemCount >= 1) {
      setCartDetail({
        ...cartDetail,
        itemCount: cartDetail.itemCount - 1,
      }).then((cartDetail) => decrement(cartDetail));
    }
  }

  return (
    <div className="item-counter">
      <button onClick={countIncrement}>Add to cart</button>
      <div className="counter">
        <span onClick={countDecrement}>-</span>
        <input type="number" value={cartDetail.itemCount} disabled></input>
        <span onClick={countIncrement}>+</span>
      </div>
    </div>
  );
}
