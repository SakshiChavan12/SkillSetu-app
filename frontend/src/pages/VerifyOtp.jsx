import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const VerifyOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || localStorage.getItem('tempEmail');
  
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  
  useEffect(() => {
    if (!email) {
      navigate('/register');
    }
  }, [email, navigate]);
  
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);
  
  const handleVerify = async (e) => {
    e.preventDefault();
    
    if (!otp || otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('http://localhost:5000/api/auth/verify-otp', {
        email: email,
        otp: otp
      });
      
      if (response.data.success) {
        setSuccess('Email verified successfully! Redirecting to dashboard...');
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.removeItem('tempEmail');
        
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      }
    } catch (error) {
      setError(error.response?.data?.message || 'OTP verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleResendOTP = async () => {
    if (resendTimer > 0) return;
    
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('http://localhost:5000/api/auth/resend-otp', {
        email: email
      });
      
      if (response.data.success) {
        setSuccess('New OTP sent to your email!');
        setResendTimer(60);
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to resend OTP');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 py-12 px-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-2">📧</div>
          <h2 className="text-3xl font-bold text-gray-800">Verify Email</h2>
          <p className="text-gray-600 mt-2">
            Enter the OTP sent to
          </p>
          <p className="text-purple-600 font-semibold mt-1 break-all">{email}</p>
        </div>
        
        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {success}
          </div>
        )}
        
        {/* OTP Form */}
        <form onSubmit={handleVerify}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter OTP Code
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              placeholder="000000"
              maxLength={6}
              autoFocus
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-center text-2xl tracking-widest font-mono text-gray-900 bg-white"
              style={{ color: '#1a202c', backgroundColor: '#ffffff' }}
            />
            <p className="text-xs text-gray-500 mt-2">
              Enter the 6-digit code sent to your email
            </p>
          </div>
          
          <button
            type="submit"
            disabled={loading || otp.length !== 6}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition disabled:opacity-50 text-base"
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
          
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={resendTimer > 0}
              className="text-purple-600 hover:underline disabled:text-gray-400"
            >
              {resendTimer > 0 
                ? `Resend OTP in ${resendTimer}s` 
                : 'Resend OTP'}
            </button>
          </div>
          
          <div className="text-center mt-4">
            <Link to="/register" className="text-gray-600 hover:text-gray-800 text-sm">
              ← Back to Registration
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;