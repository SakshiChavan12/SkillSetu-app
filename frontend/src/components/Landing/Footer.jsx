import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="SkillSetu Logo" className="h-10 w-auto rounded-lg" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SkillSetu
              </span>
            </Link>
            <p className="text-gray-400">Exchange skills, grow together.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
              <li><Link to="/browse" className="hover:text-purple-400">Browse Skills</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-purple-400">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-purple-400">GitHub</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SkillSetu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;