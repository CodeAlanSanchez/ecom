import React from 'react';
import Product from '../Product/Product';
import styles from './productList.module.css';

const ProductList = () => (
  <div className={styles.productList}>
    <Product />
    <Product />
    <Product />
  </div>
);

export default ProductList;
