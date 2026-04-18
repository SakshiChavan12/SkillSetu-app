import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  sendOTP: (userData) => api.post('/auth/send-otp', userData),
  verifyOTP: (data) => api.post('/auth/verify-otp', data),
  login: (credentials) => api.post('/auth/login', credentials),
  resendOTP: (email) => api.post('/auth/resend-otp', { email }),
  getMe: () => api.get('/auth/me')
};

export default api;