import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';
import styles from './productList.module.css';

const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className={styles.productList}>
      {products.map((product) => <Product key={product._id} item={product} />)}
    </div>
  );
};

export default ProductList;
