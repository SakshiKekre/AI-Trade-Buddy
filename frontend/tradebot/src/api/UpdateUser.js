import axios from 'axios';

// const BASE_URL = "http://127.0.0.1:5000";
const BASE_URL = process.env.REACT_APP_BACKEND_API_URL;

// Function to update user details on the server
export const updateUserDetails = async (userData) => {
  try {
    const userID = '1';
    // Make a PUT request to update user details
    console.log("payload for update user:", userData);
    
    // const response = await axios.put(`${BASE_URL}/api/user_profiles/${userID}`, userData);

    const response = await axios.put(`${BASE_URL}/api/user_profiles/${userID}`, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const responseData = response.data;
    console.log("Updated data:", responseData);

    return responseData; // Return the updated data if needed
  } catch (error) {
    console.error('Error updating user info:', error);
    throw new Error('Error updating user info');
  }
};
