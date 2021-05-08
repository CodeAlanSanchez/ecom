import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div>
      <h1>Cart</h1>
      {items.map((item) => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <h3>{item.amount}</h3>
        </div>
      ))}
    </div>
  );
};

export default Cart;
