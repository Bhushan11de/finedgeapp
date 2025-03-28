import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData)
};

export const marketAPI = {
  getStocks: () => api.get('/market/stocks'),
  getMutualFunds: () => api.get('/market/mutual-funds'),
  getGoldPrice: () => api.get('/market/gold')
};

export const portfolioAPI = {
  getHoldings: () => api.get('/portfolio'),
  addInvestment: (data) => api.post('/investments', data),
  addToWatchlist: (data) => api.post('/watchlist', data)
};

export default api;
