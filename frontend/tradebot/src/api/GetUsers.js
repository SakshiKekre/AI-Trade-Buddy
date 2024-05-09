import axios from 'axios';

const BASE_URL = "http://127.0.0.1:5000";

  
  // Function to fetch user info from the server
  export const getAllUsers = async () => {
    try {

      const response = await axios.get(`${BASE_URL}/api/all_user_profiles`);
      const responseData = response.data[0];
      console.log("data:", responseData);

      return responseData;
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };