
import React, { useState } from 'react';

const ProfilePage = () => {
  // Placeholder user data
  const [userData, setUserData] = useState({
    firstName: 'Trader',
    lastName: 'Moe',
    email: 'john.doe@example.com',
    tradeAPI: 'some yahoo trading API',
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
    <div>
      <div class="profile-container">
        <h1>User Profile</h1>
        <h2>Identification Information</h2>
        <form onSubmit={handleSubmit} class="profile-info form-container">
          <div class="form-field">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formValues.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div class="form-field">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formValues.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div class="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </div>
          <div class="form-field">
            <label htmlFor="email">Trading API:</label>
            <input
              type="text"
              id="tradeAPI"
              name="tradeAPI"
              value={formValues.tradeAPI}
              onChange={handleInputChange}
            />
          </div>

          <br/>
          <h2>Trade Preferences</h2>

          <div class="form-field">
            <label htmlFor="firstName">Indicator 1:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              // value={formValues.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div class="form-field">
            <label htmlFor="lastName">Indicator 2:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              // value={formValues.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div class="form-field">
            <label htmlFor="email">Indicator 3:</label>
            <input
              type="email"
              id="email"
              name="email"
              // value={formValues.email}
              onChange={handleInputChange}
            />
          </div>
          <br/>
          <button class="profile-button" type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
