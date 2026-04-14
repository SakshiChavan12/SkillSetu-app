// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     skills: '',
//     skillsToLearn: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     setLoading(true);

//     const result = await register({
//       name: formData.name,
//       email: formData.email,
//       password: formData.password,
//       skills: formData.skills.split(',').map(s => s.trim()),
//       skillsToLearn: formData.skillsToLearn.split(',').map(s => s.trim())
//     });

//     if (result.success) {
//       navigate('/dashboard');
//     } else {
//       setError(result.error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
//       <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h2>
//         {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 mb-1">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1">Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1">Skills (comma separated)</label>
//             <input
//               type="text"
//               name="skills"
//               value={formData.skills}
//               onChange={handleChange}
//               placeholder="e.g., JavaScript, Python, Design"
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1">Skills to Learn (comma separated)</label>
//             <input
//               type="text"
//               name="skillsToLearn"
//               value={formData.skillsToLearn}
//               onChange={handleChange}
//               placeholder="e.g., React, Node.js, Marketing"
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//           >
//             {loading ? 'Creating Account...' : 'Register'}
//           </button>
//         </form>
//         <p className="text-center text-gray-600 mt-4">
//           Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

const Register = () => <div className="text-white text-center py-32">Register Page - Coming Soon</div>;
export default Register;