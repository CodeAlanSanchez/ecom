import {
  ADD_TO_CART, FETCH_CART, REMOVE_FROM_CART,
} from '../constants/actionTypes';

export default (products = [], action = {}) => {
  switch (action.type) {
    default: return products;
    case FETCH_CART:
      return action.payload;
    case ADD_TO_CART:
      return [...products, action.payload];
    case REMOVE_FROM_CART:
      return products.filter((product) => product !== action.payload);
  }
};
