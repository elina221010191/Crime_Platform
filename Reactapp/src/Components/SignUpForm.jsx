// import React, { useState } from 'react';
// import "../Styles/signupform.css";
// const SignUpForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     // Here you would typically send the data to your backend
//     console.log('Form submitted:', {
//       username: formData.username,
//       email: formData.email
//     });

//     // Reset form after submission
//     setFormData({
//       username: '',
//       email: '',
//       password: '',
//       confirmPassword: ''
//     });
//   };

//   return (
//     <div className="signup-container">
//       <h2 className="signup-title">Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username" className="form-label">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-label">
//           <label htmlFor="email" className="">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-label">
//           <label htmlFor="password" className="">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-label">
//           <label htmlFor="confirmPassword" className="">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <button
//           type="submit"
//           className="submit-button"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUpForm;

import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Notify} from 'notiflix';



const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');
    
    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // Here you would typically make an API call to register the user
    console.log('Signup attempt with:', { name, email, password });
    
    // For demo purposes, simulate a successful signup
    alert('Account created successfully!');
    navigate('/login');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Create an Account</h1>
          <p className="mt-2 text-gray-600">Sign up to get started</p>
        </div>
        
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-100 rounded-md">
            {error}
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          
          <div className="space-y-3">
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Create Account
            </button>
            
            <div className="text-center">
              <span className="text-sm text-gray-600">Already have an account? </span>
              <button
                type="button"
                onClick={goToLogin}
                className="text-sm text-blue-600 hover:underline"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;