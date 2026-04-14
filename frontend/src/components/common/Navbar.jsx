import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-black/50 backdrop-blur-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo size="md" showText={true} />
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-purple-400 transition">Home</Link>
            <Link to="/browse" className="text-white hover:text-purple-400 transition">Browse</Link>
            <Link to="/login" className="text-white hover:text-purple-400 transition">Login</Link>
            <Link to="/register" className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full text-white hover:scale-105 transition">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;