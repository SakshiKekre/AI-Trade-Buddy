import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const ProfilePage = () => {
  // Placeholder user data
  const [userData, setUserData] = useState({
    first_name: null,
    user_api: null,
    user_risk_cap: null,
    user_market_cap: null,
    username: null,
    email: null,

    // Add more fields as needed
  });

  // State for form inputs
  const [formValues, setFormValues] = useState(userData);

  // Function to fetch user info from the server
  const getUserInfo = async () => {
    try {
      // const response = await axios.get('http://127.0.0.1:5000/get_userinfo');
      const response = await axios.get('http://127.0.0.1:5000/api/all_user_profiles');
      
      const responseData = response.data[0];

      console.log("data:", responseData);
      // Update user data and form values with fetched data
      setUserData(responseData);
      setFormValues(responseData);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  // Call getUserInfo function when the component mounts
  useEffect(() => {
    getUserInfo();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update user data in the backend or perform other actions

    try {
      // Make a POST request to the backend API endpoint
      const response = await axios.post('http://127.0.0.1:5000/user_post', formValues);
  
      // Check if the request was successful
      if (response.status === 200) {
        console.log('User data submitted successfully:', response.data);
        // Optionally update the state to reflect changes
        setUserData(formValues);
      } else {
        console.error('Error submitting user data:', response.data.message);
      }
    } catch (error) {
      console.error('Error submitting user data:', error.message);
    }


    console.log('Form submitted with values:', formValues);
    // Optionally update the state to reflect changes
    setUserData(formValues);
  };

  return (
    <div className="background container">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main">
        <div className="profile-container">
          <h1>User Profile</h1>
          <h2>Identification Information</h2>
          <form onSubmit={handleSubmit} className="profile-info form-container">
            <div className="form-field">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="name"
                value={formValues.first_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="user_market_cap">Market Cap:</label>
              <input
                type="text"
                id="user_market_cap"
                name="user_market_cap"
                value={formValues.user_market_cap}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="username"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Trading API:</label>
              <input
                type="text"
                id="tradeAPI"
                name="user_api"
                value={formValues.user_api}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Risk:</label>
              <input
                type="text"
                id="secretKey"
                name="user_risk_cap"
                value={formValues.user_risk_cap}
                onChange={handleInputChange}
              />
            </div>

            <br/>
            {/* <h2>Trade Preferences</h2>

            <div className="form-field">
              <label htmlFor="riskLevel">Risk Level:</label>
              <input
                type="text"
                id="riskLevel"
                name="riskLevel"
                value={formValues.riskLevel}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="marketCap">Market Cap:</label>
              <input
                type="select"
                id="marketCap"
                name="marketCap"
                value={formValues.marketCap}
                onChange={handleInputChange}
              />
            </div> */}
            <br/>
            <button className="profile-button" type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
