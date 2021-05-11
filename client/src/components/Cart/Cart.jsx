import React from 'react';
import { useSelector } from 'react-redux';
import Total from '../Total/Total';
import styles from './cart.module.css';

const Cart = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <div className={styles.heading}>
          <h1>Cart</h1>
        </div>
        {items && items.length >= 1
          ? (
            <div className={styles.cartThing}>
              <div className={styles.cartItems}>
                {items.map((item) => (
                  <>
                    <div className={styles.product}>
                      <img src={item.image} alt={item.name} />
                      <div className={styles.info}>
                        <h5>{item.name}</h5>
                        <h6 className={styles.description}>{item.description}</h6>
                        <h6 className={styles.price}>
                          $
                          {item.price}
                        </h6>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
              </div>
              <div>
                <Total />
              </div>
            </div>
          )
          : (
            <h4 className={styles.empty}>Cart is empty...</h4>
          )}
      </div>
    </div>
  );
};

export default Cart;
