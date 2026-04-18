const User = require('../models/User');
const jwt = require('jsonwebtoken');
const generateOTP = require('../utils/generateOTP');
const emailService = require('../services/emailService');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};

// @desc    Send OTP for registration
// @route   POST /api/auth/send-otp
const sendOTP = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email and password'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters'
      });
    }

    // Check if user already exists and verified
    let user = await User.findOne({ email });
    
    if (user && user.isVerified) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email. Please login.'
      });
    }

    // Generate OTP
    const otp = generateOTP();
    const otpExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes

    if (user) {
      // Update existing unverified user
      user.name = name;
      user.phone = phone;
      user.password = password;
      user.otp = otp;
      user.otpExpiry = otpExpiry;
      user.otpMethod = 'email';
      await user.save();
    } else {
      // Create new user
      user = await User.create({
        name,
        email,
        phone,
        password,
        otp,
        otpExpiry,
        otpMethod: 'email',
        isVerified: false
      });
    }

    // Send OTP via email
    try {
      await emailService.sendOTPEmail(email, name, otp);
      
      res.status(200).json({
        success: true,
        message: 'OTP sent successfully to your email',
        email: email
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      res.status(500).json({
        success: false,
        message: 'Failed to send OTP. Please check your email configuration.'
      });
    }
  } catch (error) {
    console.error('Send OTP error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Verify OTP and complete registration
// @route   POST /api/auth/verify-otp
const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and OTP'
      });
    }

    const user = await User.findOne({ email }).select('+otp +otpExpiry');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found. Please register first.'
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: 'Email already verified. Please login.'
      });
    }

    // Check if OTP is expired
    if (user.otpExpiry < Date.now()) {
      return res.status(400).json({
        success: false,
        message: 'OTP has expired. Please request a new one.'
      });
    }

    // Check if OTP matches
    if (user.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: 'Invalid OTP. Please try again.'
      });
    }

    // Verify user
    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    // Send welcome email
    try {
      await emailService.sendWelcomeEmail(user.email, user.name);
    } catch (emailError) {
      console.error('Welcome email failed:', emailError);
    }

    // Generate JWT token
    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: 'Email verified successfully!',
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isVerified: user.isVerified
      }
    });
  } catch (error) {
    console.error('OTP verification error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check if email is verified
    if (!user.isVerified) {
      return res.status(401).json({
        success: false,
        message: 'Please verify your email first. Check your inbox for OTP.'
      });
    }

    // Check password
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate token
    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isVerified: user.isVerified
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Resend OTP
// @route   POST /api/auth/resend-otp
const resendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: 'Email already verified'
      });
    }

    // Generate new OTP
    const otp = generateOTP();
    const otpExpiry = Date.now() + 10 * 60 * 1000;

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    // Send new OTP
    await emailService.sendOTPEmail(email, user.name, otp);

    res.status(200).json({
      success: true,
      message: 'New OTP sent successfully'
    });
  } catch (error) {
    console.error('Resend OTP error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json({
      success: true,
      user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  sendOTP,
  verifyOTP,
  login,
  resendOTP,
  getMe
};