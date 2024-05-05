import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const TradePlatformPage = () => {
  // Placeholder user data
  const [userData, setUserData] = useState({
    index: 'Some Index',
    platform: 'Some Platform',
    riskLevel: 'Low',
    // Add more fields as needed
  });

  // State for form inputs
  const [formValues, setFormValues] = useState(userData);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data in the backend or perform other actions
    console.log('Form submitted with values:', formValues);
    // Optionally update the state to reflect changes
    setUserData(formValues);
  };

  return (
    <div className="background container">

      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>

      <div className='main'>
        <div className="profile-container">
          <h1>Create Trade Order</h1>
          {/* <h2>Identification Information</h2> */}
          <form onSubmit={handleSubmit} className="profile-info form-container">
            <br/>
            <h2>Trade Preferences</h2>

            <div className="form-field">
              <label htmlFor="index">Index:</label>
              <select
                id="index"
                name="index"
                value={formValues.index}
                onChange={handleInputChange}
              >
                <option value="Some Index">DOW</option>
                <option value="Another Index">NASDAQ</option>
                <option value="Another Index">S&P</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="platform">Platform:</label>
              <select
                id="platform"
                name="platform"
                value={formValues.platform}
                onChange={handleInputChange}
              >
                <option value="Platform">Alpaca</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="riskLevel">Risk Level:</label>
              <select
                id="riskLevel"
                name="riskLevel"
                value={formValues.riskLevel}
                onChange={handleInputChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            {/* Add more dropdowns as needed */}
            <br/>
            <button className="profile-button" type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TradePlatformPage;
