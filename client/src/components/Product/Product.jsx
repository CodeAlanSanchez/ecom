import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './product.module.css';
import { addToCart } from '../../actions/cartActions';

const Product = ({ item = {} }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAdd = () => {
    dispatch(addToCart({ ...item, amount: 1 }));
    history.push('/cart');
  };

  return (
    <div className={styles.product}>
      <img alt={item.name} src={item.image} />
      <div>
        <a href="/">
          <h5>{item.name}</h5>
          <h6>{item.brand}</h6>
        </a>
        <a className={styles.info} href="/">
          <p>{item.description}</p>
        </a>
        <p className={styles.price}>
          $
          {item.price}
        </p>
        <button className={styles.button} type="button" onClick={() => handleAdd()}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
