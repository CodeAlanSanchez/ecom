import React from 'react';

const Cart = ({ items }) => (
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

export default Cart;
