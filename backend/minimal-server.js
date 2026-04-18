const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Mock login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  if (email === 'test@example.com' && password === '123456') {
    const token = jwt.sign({ id: 1, email }, 'secret', { expiresIn: '7d' });
    res.json({
      success: true,
      token,
      user: { id: 1, name: 'Test User', email }
    });
  } else {
    res.status(401).json({ 
      success: false, 
      message: 'Invalid credentials' 
    });
  }
});

// Mock register
app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body;
  
  // Generate a mock verification token
  const mockToken = Math.random().toString(36).substring(7);
  
  res.json({
    success: true,
    message: 'Registration successful! Please check your email.',
    verificationUrl: `http://localhost:5173/verify-email/${mockToken}`
  });
});

// Mock verification
app.get('/api/auth/verify-email/:token', (req, res) => {
  res.json({
    success: true,
    message: 'Email verified successfully!',
    token: 'mock-jwt-token'
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Minimal server running on http://localhost:${PORT}`);
  console.log(`📍 Test: http://localhost:${PORT}/api/test`);
  console.log(`📍 Login: POST http://localhost:${PORT}/api/auth/login`);
});