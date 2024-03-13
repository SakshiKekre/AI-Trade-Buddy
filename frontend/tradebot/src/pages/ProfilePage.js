
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
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formValues.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Trading API:</label>
          <input
            type="text"
            id="tradeAPI"
            name="tradeAPI"
            value={formValues.tradeAPI}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more fields as needed */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfilePage;
