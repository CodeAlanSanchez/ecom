import React from 'react';
import styles from './product.module.css';

const Product = () => (
  <div className={styles.product}>
    <a href="google.com">
      <img alt="product" />
      <h5>Athletic Shoes</h5>
      <h6>Nike</h6>
    </a>
    <a className={styles.info} href="google.com">
      <p>A pair of shoes which can be used to run in.</p>
    </a>
    <p className={styles.price}>$99.99</p>
    <button className={styles.button} type="button">Add to Cart</button>
  </div>
);

export default Product;
