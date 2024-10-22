import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const productApi = {
    getAll: () => axios.get(`${API_BASE_URL}/products`),
    getById: (id) => axios.get(`${API_BASE_URL}/products/${id}`),
    create: (product) => axios.post(`${API_BASE_URL}/products`, product),
    update: (id, product) => axios.put(`${API_BASE_URL}/products/${id}`, product),
    delete: (id) => axios.delete(`${API_BASE_URL}/products/${id}`)
};