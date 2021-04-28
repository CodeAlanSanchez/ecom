import * as api from '../api';
import {
  FETCH_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, REMOVE_PRODUCT,
} from '../constants/actionTypes';

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = api.fetchProducts();

    dispatch({ type: FETCH_PRODUCTS, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const { data } = api.createProduct(product);

    dispatch({ type: CREATE_PRODUCT, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = (product, id) => async (dispatch) => {
  try {
    const { data } = api.updateProduct(product, id);

    dispatch({ type: UPDATE_PRODUCT, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const { data } = api.deleteProduct(id);

    dispatch({ type: REMOVE_PRODUCT, payload: data });
  } catch (error) {
    console.error(error);
  }
};
