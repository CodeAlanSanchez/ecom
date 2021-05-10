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
        {items.length <= 0
          ? <h5 className={styles.empty}>Cart is empty...</h5>
          : (
            <div className={styles.cartContainer}>
              {items.map((item) => (
                <>
                  <div key={item._id} className={styles.product}>
                    <div className={styles.image}>
                      <img src={item.image} alt={item.name} />
                    </div>
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
              <div className={styles.total}>
                <Total />
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Cart;
