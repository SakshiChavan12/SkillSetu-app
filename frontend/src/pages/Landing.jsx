import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Landing = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Exchange Skills, Grow Together
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with talented individuals, share your expertise, and learn new skills
          </p>
          {!user && (
            <Link
              to="/register"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started for Free
            </Link>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Share Your Skills</h3>
            <p className="text-gray-600">Teach others what you know best and earn credits</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Learn New Skills</h3>
            <p className="text-gray-600">Find experts to help you master any skill you want</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Build Network</h3>
            <p className="text-gray-600">Connect with like-minded people worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;