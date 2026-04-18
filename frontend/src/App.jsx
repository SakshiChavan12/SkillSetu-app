import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/common/Navbar';

// Import Landing Page Components
import Hero from './components/Landing/Hero';
import Features from './components/Landing/Features';
import HowItWorks from './components/Landing/HowItWorks';
import ExploreSkills from './components/Landing/ExploreSkills';
import Testimonials from './components/Landing/Testimonials';
import CTA from './components/Landing/CTA';
import Footer from './components/Landing/Footer';

// Import Pages
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyOTP from './pages/VerifyOTP';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import BrowseUsers from './pages/BrowseUsers';
import Requests from './pages/Requests';
import TestRouter from './pages/TestRouter';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Import Navigate
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <Navbar />
          
          <Routes>
            {/* Landing Page Route */}
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <HowItWorks />
                <ExploreSkills />
                <Testimonials />
                <CTA />
                <Footer />
              </>
            } />
            
            {/* Auth Routes - Public */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            
            {/* Protected Routes - Require Authentication */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/browse" 
              element={
                <ProtectedRoute>
                  <BrowseUsers />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/requests" 
              element={
                <ProtectedRoute>
                  <Requests />
                </ProtectedRoute>
              } 
            />
            
            {/* Test Route */}
            <Route path="/test" element={<TestRouter />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;