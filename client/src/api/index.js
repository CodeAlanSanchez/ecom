import axios from 'axios';

const url = 'http://localhost:5000/api/products';

export const fetchProducts = () => axios.get(`${url}`);
export const createProduct = (product) => axios.post(`${url}`, product);
export const updateProduct = (product, id) => axios.patch(`${url}/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${url}/${id}`);
