// import { useState, useEffect } from 'react';
// import { useAuth } from '../context/AuthContext';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   const { user } = useAuth();
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   const fetchRequests = async () => {
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_API_URL}/requests`);
//       setRequests(response.data.slice(0, 5)); // Show latest 5 requests
//     } catch (error) {
//       console.error('Error fetching requests:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">
//           Welcome back, {user?.name}! 👋
//         </h1>

//         <div className="grid md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold mb-2">Your Skills</h3>
//             <div className="flex flex-wrap gap-2">
//               {user?.skills?.map((skill, index) => (
//                 <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold mb-2">Skills to Learn</h3>
//             <div className="flex flex-wrap gap-2">
//               {user?.skillsToLearn?.map((skill, index) => (
//                 <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
//             <Link to="/browse" className="block text-blue-600 mb-2">🔍 Find people to learn from</Link>
//             <Link to="/profile" className="block text-blue-600">✏️ Update your profile</Link>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
//           {loading ? (
//             <p>Loading...</p>
//           ) : requests.length === 0 ? (
//             <p className="text-gray-500">No requests yet. Start by browsing users!</p>
//           ) : (
//             <div className="space-y-3">
//               {requests.map((req) => (
//                 <div key={req._id} className="border-b pb-3">
//                   <p>
//                     {req.sender.name} wants to exchange {req.skillOffered} for {req.skillRequested}
//                     <span className={`ml-2 text-sm ${
//                       req.status === 'pending' ? 'text-yellow-600' :
//                       req.status === 'accepted' ? 'text-green-600' : 'text-red-600'
//                     }`}>
//                       ({req.status})
//                     </span>
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

const Dashboard = () => <div className="text-white text-center py-32">Dashboard - Coming Soon</div>;
export default Dashboard;