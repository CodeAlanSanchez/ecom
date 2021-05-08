import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './product.module.css';
import { addToCart } from '../../actions/cartActions';

const Product = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className={styles.product}>
      <a href="google.com">
        <img alt={item.name} />
        <h5>{item.name}</h5>
        <h6>{item.brand}</h6>
      </a>
      <a className={styles.info} href="google.com">
        <p>{item.description}</p>
      </a>
      <p className={styles.price}>
        $
        {item.price}
      </p>
      <button className={styles.button} type="button" onClick={() => handleAdd()}>Add to Cart</button>
    </div>
  );
};

export default Product;
