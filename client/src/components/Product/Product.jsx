import React from 'react';
import './styles.css';

const Product = () => (
  <div className="product">
    <a href="google.com">
      <img alt="product" />
      <h5>Athletic Shoes</h5>
      <h6>Nike</h6>
    </a>
    <a className="info" href="google.com">
      <p>A pair of shoes which can be used to run in.</p>
    </a>
    <input />
    <button className="button" type="button">Add to Cart</button>
  </div>
);

export default Product;
