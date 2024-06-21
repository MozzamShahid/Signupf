import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Replace 'YOUR_BACKEND_ENDPOINT' with your actual MongoDB backend endpoint
      const response = await axios.post('YOUR_BACKEND_ENDPOINT', formData);
      console.log('Signup successful:', response.data);
      // Optionally, you can redirect the user or show a success message
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle errors, show an error message, etc.
    }
  };

  return (
    <div>
      <h1 className="main-heading text-7xl font-bold">Sign up</h1>
      <div className="form">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            className="bg-green-400 hover:bg-blue-400 text-white text-2xl font-semibold p-2 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
