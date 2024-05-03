import axios from 'axios';
import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    country: '',
    programmingLanguage: '',
    termsAgreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  const serverPort = "http://localhost:5000/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${serverPort}register`, formData);
      console.log(response.data);
      alert('Registration successful!');
    } catch (error) {
      console.error('Error registering:', error);
      alert('Error registering. Please try again.');
    }
  };

  return (
    <div>
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Gender:
          <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} /> Male
          <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female
        </label>
        <br />
        <label>
          Country:
          <select name="country" value={formData.country} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
          </select>
        </label>
        <br />
        <label>
          Programming Language:
          <select name="programmingLanguage" value={formData.programmingLanguage} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
          </select>
        </label>
        <br />
        <label>
          <input type="checkbox" name="termsAgreed" checked={formData.termsAgreed} onChange={handleChange} required /> I agree to the terms and conditions
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
