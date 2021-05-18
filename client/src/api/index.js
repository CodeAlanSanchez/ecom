import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const url = `${BASE_URL}/api/products`;

export const fetchProducts = () => axios.get(`${url}`);
export const createProduct = (product) => axios.post(`${url}`, product);
export const updateProduct = (product, id) => axios.patch(`${url}/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${url}/${id}`);
