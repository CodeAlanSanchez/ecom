/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './total.module.css';

const Total = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className={styles.total}>
      <h1>Summary</h1>
      <hr />
      {items.map((item) => (
        <>
          <div className={styles.item}>
            <h5>{item.name}</h5>
            <p className={styles.price}>{item.price}</p>
          </div>
          <hr />
        </>
      ))}
      <hr />
      <p className={styles.totalPrice}>
        <b>
          Total:
          {' '}
        </b>
        $
        {items.reduce((acc, curr) => curr.price + acc, 0)}
      </p>
      <button type="button">Checkout</button>
    </div>
  );
};

export default Total;
