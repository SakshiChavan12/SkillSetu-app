const LoadingSpinner = ({ size = 'md', color = 'purple' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colors = {
    purple: 'border-purple-500',
    white: 'border-white',
    blue: 'border-blue-500'
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`${sizes[size]} ${colors[color]} border-2 border-t-transparent rounded-full animate-spin`}></div>
    </div>
  );
};

export default LoadingSpinner;