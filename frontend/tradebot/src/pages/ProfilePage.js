import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { getUserData } from '../api/GetUserProfile';
import { updateUserDetails } from '../api/UpdateUser';

const ProfilePage = () => {
  // Placeholder user data
  const [userData, setUserData] = useState({
    // user_id: null,
    first_name: null,
    last_name: null,
    email: null,
    phone: null
    // trading_api_key: null,
    // trading_api_secret: null
  });

  // State for form inputs
  const [formValues, setFormValues] = useState(userData);

  const getUserInfo = async () => {
    try {
      // Call the getUserData function to fetch user info
      const userDataFromAPI = await getUserData();
      // Update the state with the retrieved user data
      setUserData(userDataFromAPI);
      setFormValues(userDataFromAPI)
      console.log("formValues during load:", formValues);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  // Call getUserInfo function when the component mounts
  useEffect(() => {
    getUserInfo();
  }, []);

  // // Handle form input changes
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // Handle form input changes
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormValues(prevState => ({
    ...prevState,
    [name]: value
  }));
};


  // // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Update user data in the backend or perform other actions

  //   try {
  //     const response = updateUserDetails(formValues);
  //   } catch (error) {
  //     console.error('Error submitting user data:', error.message);
  //   }

  //   console.log('Form submitted with values:', formValues);
  //   // Optionally update the state to reflect changes
  //   setUserData(formValues);
  // };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert formValues to JSON format
      const jsonData = JSON.stringify(formValues);

      // Call the updateUserDetails function with JSON data
      const response = await updateUserDetails(jsonData);
      
      // Optionally update the state or perform other actions based on the response
      console.log('Response:', response);
    } catch (error) {
      console.error('Error submitting user data:', error.message);
    }

    console.log('Form submitted with values:', formValues);
  };

  return (
    <div className="background container">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main">
        <div className="profile-container">
        
          <form onSubmit={handleSubmit} className="profile-info form-container">
          <h1>User Profile Details</h1>
            <div className="form-field">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="first_name"
                value={formValues.first_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                name="last_name"
                value={formValues.last_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleInputChange}
              />
            </div>
            <br/>
            <button className="profile-button" type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
