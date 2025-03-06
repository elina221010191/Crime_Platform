import React, { useState } from 'react';
import '../Styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const crimeCategories = [
    'Theft',
    'Assault',
    'Burglary',
    'Fraud',
    'Vandalism',
    'Drug Offenses',
    'Cybercrime',
    'Robbery',
    'Homicide',
    'Kidnapping'
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      ) : (
        <div className="crime-categories">
          <h2>Crime Categories</h2>
          <ul>
            {crimeCategories.map((crime, index) => (
              <li key={index}>{crime}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Login;