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

  const crimeTypes = ['Theft', 'Assault', 'Vandalism', 'Fraud', 'Cybercrime', 'Other'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Report submitted successfully.');
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Crime Reporting Form</h2>
      <form onSubmit={handleSubmit}>
        {!formData.anonymous && (
          <>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </>
        )}
        <label>
          <input type="checkbox" name="anonymous" checked={formData.anonymous} onChange={handleChange} />
          Report Anonymously
        </label>

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Type of Crime:</label>
        <select name="crimeType" value={formData.crimeType} onChange={handleChange} required>
          <option value="">Select</option>
          {crimeTypes.map((crime, index) => (
            <option key={index} value={crime}>{crime}</option>
          ))}
        </select>

        <label>Date of Incident:</label>
        <input type="date" name="incidentDate" value={formData.incidentDate} onChange={handleChange} required />

        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} rows="4" required />

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default Contact;
