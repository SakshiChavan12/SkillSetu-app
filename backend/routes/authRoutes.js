const express = require('express');
const {
  sendOTP,
  verifyOTP,
  login,
  resendOTP,
  getMe
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);
router.post('/login', login);
router.post('/resend-otp', resendOTP);

// Protected routes
router.get('/me', protect, getMe);

module.exports = router;