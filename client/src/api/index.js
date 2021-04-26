import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchProducts = () => axios.get(`${url}/api`);
export const createProduct = (product) => axios.post(`${url}/api`, product);
export const updateProduct = (product, id) => axios.patch(`${url}/api/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${url}/api/${id}`);
