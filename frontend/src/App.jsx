import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
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
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import BrowseUsers from './pages/BrowseUsers';
import Requests from './pages/Requests';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <Navbar />
          
          <Routes>
            {/* Landing Page Route - This renders all components */}
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
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/browse" element={<BrowseUsers />} />
            <Route path="/requests" element={<Requests />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;

