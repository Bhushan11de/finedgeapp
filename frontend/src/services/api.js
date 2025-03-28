import axios from 'axios';
import { store } from '../store/store';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://api.growwclonemock.in/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
api.interceptors.request.use(config => {
  const token = localStorage.getItem('groww_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
api.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response?.status === 401) {
      store.dispatch({ type: 'LOGOUT' });
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const marketAPI = {
  getIndices: () => api.get('/market/indices'),
  getStocks: () => api.get('/market/stocks'),
  getStockDetails: (symbol) => api.get(`/stocks/${symbol}`)
};

export const portfolioAPI = {
  getHoldings: () => api.get('/portfolio'),
  placeOrder: (order) => api.post('/orders', order)
};

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (user) => api.post('/auth/register', user)
};

export default api;

// Add these new endpoints
export const newsAPI = {
  getMarketNews: () => api.get('/news/market'),
  getStockNews: (symbol) => api.get(`/news/stock/${symbol}`)
};

export const userAPI = {
  updateProfile: (data) => api.patch('/user/profile', data),
  changePassword: (data) => api.post('/user/change-password', data)
};
