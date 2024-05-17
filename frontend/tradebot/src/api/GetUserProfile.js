import axios from 'axios';

// const BASE_URL = "http://127.0.0.1:5000";
const BASE_URL = process.env.REACT_APP_BACKEND_API_URL;

  // Function to fetch user info from the server
  export const getUserData = async () => {
    try {

        console.log('Backend API URL:', BASE_URL);
        const userID = '1';
        const response = await axios.get(`${BASE_URL}/api/user_profiles/${userID}`);
        console.log("user data:", response.data);
        return response.data;

    } catch (error) {
        console.error('Error fetching user info:', error);
    }
  };