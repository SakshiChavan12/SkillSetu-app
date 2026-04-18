import { Link } from 'react-router-dom';

const TestRouter = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Router Test Page</h1>
        <p className="mb-4">If you see this, routing is working!</p>
        <div className="space-y-2">
          <Link to="/register" className="block text-blue-600 hover:underline">Go to Register</Link>
          <Link to="/verify-otp" className="block text-blue-600 hover:underline">Go to Verify OTP</Link>
          <Link to="/login" className="block text-blue-600 hover:underline">Go to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default TestRouter;