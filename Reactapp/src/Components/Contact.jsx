import React, { useState } from 'react';
import "../Styles/contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    crimeType: '',
    incidentDate: '',
    location: '',
    description: '',
    anonymous: false
  });

  const crimeTypes = [
    'Theft', 
    'Assault', 
    'Vandalism', 
    'Fraud', 
    'Cybercrime', 
    'Domestic Violence', 
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form Submitted', formData);
    alert('Thank you for your report. We will review it carefully.');
  };

  return (
    <div className="container">
      <h1 className=" ">
        Crime Reporting Form
      </h1>
      <form 
        onSubmit={handleSubmit} 
        className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6"
      >
        <div className="crime-form">
          <label 
            htmlFor="name" 
            className="form-title"
          >
            Name {formData.anonymous ? '(Optional)' : '*'}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={formData.anonymous}
            className="form-input "
            placeholder="Enter your name"
          />
        </div>

        <div className="crime-form">
          <label 
            className="form-input:focus"
          >
            <input
              type="checkbox"
              name="anonymous"
              checked={formData.anonymous}
              onChange={handleChange}
              className="form-input:focus "
            />
            <span>Report Anonymously</span>
          </label>
        </div>

        <div className="crime-form">
          <label 
            htmlFor="email" 
            className="form-title"
          >
            Contact Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter your email"
          />
        </div>

        <div className="crime-form">
          <label 
            htmlFor="phone" 
            className="form-title"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="crime-form">
          <label 
            htmlFor="crimeType" 
            className="form-title"
          >
            Type of Crime
          </label>
          <select
            id="crimeType"
            name="crimeType"
            value={formData.crimeType}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">Select Crime Type</option>
            {crimeTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="crime-form">
          <label 
            htmlFor="incidentDate" 
            className="form-title"
          >
            Date of Incident
          </label>
          <input
            type="date"
            id="incidentDate"
            name="incidentDate"
            value={formData.incidentDate}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="crime-form">
          <label 
            htmlFor="location" 
            className="form-title"
          >
            Location of Incident
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter incident location"
            required
          />
        </div>

        <div className="crime-form">
          <label 
            htmlFor="description" 
            className="form-title"
          >
            Detailed Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-input"
            rows="4"
            placeholder="Provide detailed information about the incident"
            required
          ></textarea>
        </div>

        <div className="crime-form">
          <button
            type="submit"
            className="form-submit-btn "
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;