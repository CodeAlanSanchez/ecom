import * as api from '../api';
import {
  ADD_TO_CART, FETCH_CART, REMOVE_FROM_CART,
} from '../constants/actionTypes';

export const getCart = () => ({ type: FETCH_CART });
