import {
  FETCH_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, REMOVE_PRODUCT,
} from '../constants/actionTypes';

export default (products = [], action = {}) => {
  switch (action.type) {
    default: return products;
    case FETCH_PRODUCTS:
      return action.payload;
    case CREATE_PRODUCT:
      return [...products, action.payload];
    case UPDATE_PRODUCT:
      return products.map(
        (product) => (product._id === action.payload._id ? action.payload : product),
      );
    case REMOVE_PRODUCT:
      return products.filter((product) => product._id !== action.payload._id);
  }
};
