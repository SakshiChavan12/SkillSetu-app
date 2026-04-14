import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

const Logo = ({ size = 'md', showText = true, className = '' }) => {
  const sizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <Link to="/" className={`flex items-center space-x-3 group ${className}`}>
      <div className="relative">
        <img 
          src={logo} 
          alt="SkillSetu" 
          className={`${sizes[size]} w-auto rounded-lg transition-transform group-hover:scale-105`}
        />
        {/* Tooltip on hover */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          SkillSetu
        </div>
      </div>
      {showText && (
        <span className={`${textSizes[size]} font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent`}>
          SkillSetu
        </span>
      )}
    </Link>
  );
};

export default Logo;