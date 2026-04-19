import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      navigate('/login');
      return;
    }
    
    setUser(JSON.parse(userData));
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl mx-auto p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎯</div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome to SkillSetu!</h1>
            <p className="text-gray-600 mt-2">Your skill exchange journey begins here</p>
          </div>
          
          {/* Success Alert */}
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-800 font-medium">
                  Email Verified! Your account is fully activated.
                </p>
              </div>
            </div>
          </div>
          
          {/* User Information Card */}
          {user && (
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">User Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-gray-700 w-32 font-semibold">Name:</span>
                  <span className="text-gray-900">{user.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 w-32 font-semibold">Email:</span>
                  <span className="text-gray-900">{user.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 w-32 font-semibold">Phone:</span>
                  <span className="text-gray-900">{user.phone || 'Not provided'}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 w-32 font-semibold">Status:</span>
                  <span className="text-green-600 font-semibold">Verified ✓</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Quick Actions Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Link to="/browse" className="bg-purple-50 rounded-lg p-4 text-center hover:shadow-lg transition duration-200">
              <div className="text-4xl mb-2">📚</div>
              <h4 className="font-bold text-gray-900">Learn Skills</h4>
              <p className="text-gray-600 text-sm mt-1">Find mentors and learn new skills</p>
            </Link>
            
            <Link to="/profile" className="bg-indigo-50 rounded-lg p-4 text-center hover:shadow-lg transition duration-200">
              <div className="text-4xl mb-2">🎓</div>
              <h4 className="font-bold text-gray-900">Teach Skills</h4>
              <p className="text-gray-600 text-sm mt-1">Share your expertise with others</p>
            </Link>
          </div>
          
          {/* Recent Activity Section */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Welcome to SkillSetu! Start by exploring skills.</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Complete your profile to get better matches.</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>Connect with learners and teachers.</span>
              </div>
            </div>
          </div>
          
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;