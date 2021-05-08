import {
  ADD_TO_CART, FETCH_CART, REMOVE_FROM_CART,
} from '../constants/actionTypes';

export const getCart = () => ({ type: FETCH_CART });
export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, payload: id });
