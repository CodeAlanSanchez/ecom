import * as api from '../api';

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = api.fetchProducts();

    dispatch({ type: 'FETCH_PRODUCTS', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const { data } = api.createProduct(product);

    dispatch({ type: 'CREATE_PRODUCT', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = (product, id) => async (dispatch) => {
  try {
    const { data } = api.updateProduct(product, id);

    dispatch({ type: 'UPDATE_PRODUCT', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const { data } = api.deleteProduct(id);

    dispatch({ type: 'DELETE_PRODUCT', payload: data });
  } catch (error) {
    console.error(error);
  }
};
