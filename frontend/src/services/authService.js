// NEW FILE
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const authService = {
  // Register user & send OTP
  register: async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  },

  // Verify OTP
  verifyOTP: async (email, otp) => {
    const response = await axios.post(`${API_URL}/auth/verify-otp`, { email, otp });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  // Login user
  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  // Resend OTP
  resendOTP: async (email) => {
    const response = await axios.post(`${API_URL}/auth/resend-otp`, { email });
    return response.data;
  },

  // Logout
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // Get current user
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
  },

  // Get token
  getToken: () => {
    return localStorage.getItem('token');
  }
};

export default authService;