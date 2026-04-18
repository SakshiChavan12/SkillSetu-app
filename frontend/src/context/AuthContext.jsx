import React, { createContext, useState, useContext, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      loadUser();
    } else {
      setLoading(false);
    }
  }, [token]);

  const loadUser = async () => {
    try {
      const response = await authAPI.getMe();
      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error('Load user error:', error);
      localStorage.removeItem('token');
      setToken(null);
    } finally {
      setLoading(false);
    }
  };

  const sendOTP = async (userData) => {
    try {
      const response = await authAPI.sendOTP(userData);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to send OTP'
      };
    }
  };

  const verifyOTP = async (email, otp) => {
    try {
      const response = await authAPI.verifyOTP({ email, otp });
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        setToken(response.data.token);
        setUser(response.data.user);
        return { success: true, user: response.data.user };
      }
      return { success: false, error: response.data.message };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'OTP verification failed'
      };
    }
  };

  const login = async (email, password) => {
    try {
      const response = await authAPI.login({ email, password });
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        setToken(response.data.token);
        setUser(response.data.user);
        return { success: true, user: response.data.user };
      }
      return { success: false, error: response.data.message };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Login failed'
      };
    }
  };

  const resendOTP = async (email) => {
    try {
      const response = await authAPI.resendOTP(email);
      return { success: true, message: response.data.message };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to resend OTP'
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      sendOTP,
      verifyOTP,
      login,
      resendOTP,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};