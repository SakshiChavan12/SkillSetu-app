const GradientButton = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`btn-gradient px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;