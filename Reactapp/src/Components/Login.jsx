// import React, { useState } from 'react';
// import '../Styles/login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [error, setError] = useState('');

//   const crimeCategories = [
//     'Theft',
//     'Assault',
//     'Burglary',
//     'Fraud',
//     'Vandalism',
//     'Drug Offenses',
//     'Cybercrime',
//     'Robbery',
//     'Homicide',
//     'Kidnapping'
//   ];

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === 'admin' && password === 'password') {
//       setLoggedIn(true);
//       setError('');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       {!loggedIn ? (
//         <form onSubmit={handleLogin}>
//           <h2>Login</h2>
//           {error && <p className="error">{error}</p>}
//           <label>
//             Username:
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </label>
//           <button type="submit">Login</button>
//         </form>
//       ) : (
//         <div className="crime-categories">
//           <h2>Crime Categories</h2>
//           <ul>
//             {crimeCategories.map((crime, index) => (
//               <li key={index}>{crime}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import useForm from "react-hook-form";
import "../Styles/login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Reset any previous errors
    setError('');
    
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    // Here you would typically make an API call to authenticate
    console.log('Login attempt with:', { email, password });
    
    // For demo purposes, simulate a successful login
    alert('Login successful!');
  };

  const handleSignUp = () => {
    // Navigate to the signup page
    navigate('/signup');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-gray-600">Please sign in to your account</p>
        </div>
        
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-100 rounded-md">
            {error}
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
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
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                Remember me
              </label>
            </div>
            
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>
          
          <div className="space-y-3">
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Sign In
            </button>
            
            {/* <button */}
               {/* type="button"
               onClick={handleSignUp}
               className="w-full px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50" */}
            {/* > */}
              {/* Create an Account */}
            {/* </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;