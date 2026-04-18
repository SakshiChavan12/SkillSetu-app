import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl mx-auto p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎯</div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome to SkillSetu!</h1>
            <p className="text-gray-600 mt-2">Your skill exchange journey begins here</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-800">
              ✅ <strong>Email Verified!</strong> Your account is fully activated.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">User Information</h3>
            <div className="space-y-2">
              <p><strong className="text-gray-700">Name:</strong> {user?.name}</p>
              <p><strong className="text-gray-700">Email:</strong> {user?.email}</p>
              <p><strong className="text-gray-700">Phone:</strong> {user?.phone || 'Not provided'}</p>
              <p><strong className="text-gray-700">Account Status:</strong> <span className="text-green-600">Verified ✓</span></p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-4xl mb-2">📚</div>
              <h4 className="font-bold text-gray-800">Learn Skills</h4>
              <p className="text-gray-600 text-sm">Find mentors and learn new skills</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 text-center">
              <div className="text-4xl mb-2">🎓</div>
              <h4 className="font-bold text-gray-800">Teach Skills</h4>
              <p className="text-gray-600 text-sm">Share your expertise with others</p>
            </div>
          </div>

          <button
            onClick={logout}
            className="w-full bg-red-500 text-white py-2 rounded font-semibold hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;