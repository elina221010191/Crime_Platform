import React, { useState } from 'react';
import "../Styles/login.css";
const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Form submitted:', {
      username: formData.username,
      email: formData.email
    });

    // Reset form after submission
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form1-group">
          <label htmlFor="username" className="form1-label">Email</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="form1-input"
          />
        </div>
        <div className="form1-label">
          <label htmlFor="email" className="">Password</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form1-input"
          />
        </div>
        {/* <div className="form1-label">
          <label htmlFor="password" className="">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form1-input"
          />
        </div>
        <div className="form1-label">
          <label htmlFor="confirmPassword" className="">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="form1-input"
          />
        </div> */}
        <button
          type="submit"
          className="login-button"
        >
          login in
        </button>
      </form>
    </div>
  );
};

export default Login;