import {
  ADD_TO_CART, FETCH_CART, REMOVE_FROM_CART,
} from '../constants/actionTypes';

export default (products = [], action = {}) => {
  switch (action.type) {
    default:
    case FETCH_CART:
      if (localStorage.getItem('cart')) return JSON.parse(localStorage.getItem('cart'));
      return products;
    case ADD_TO_CART:
      localStorage.setItem('cart', JSON.stringify([...products, { ...action?.payload }]));

      return [...products, action.payload];
    case REMOVE_FROM_CART:
      localStorage.setItem('cart', JSON.stringify(products.filter((product) => product !== action.payload)));

      return products.filter((product) => product !== action.payload);
  }
};
