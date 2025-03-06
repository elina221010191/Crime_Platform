import React, { useState } from 'react';
import "../Styles/signupform.css";
const SignUpForm = () => {
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
    <div className="signup-container1">
      <h2 className="signup-title1">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group1">
          <label htmlFor="username" className="form-label1">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="form-input1"
          />
        </div>
        <div className="form-label1">
          <label htmlFor="email" className="">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input1"
          />
        </div>
        <div className="form-label1">
          <label htmlFor="password" className="">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input1"
          />
        </div>
        <div className="form-label1">
          <label htmlFor="confirmPassword" className="">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="form-input1"
          />
        </div>
        <button
          type="submit"
          className="submit-button1"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;