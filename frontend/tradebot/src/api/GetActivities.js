import axios from 'axios';

// const BASE_URL = "http://127.0.0.1:5000";
const BASE_URL = process.env.REACT_APP_BACKEND_API_URL;

// Function to get positions
export const getAllTradeActivities = async () => {
    try {
        // Make a GET request to the positions
        const response = await axios.get(`${BASE_URL}/api/all_user_trades`);

        // Return the response data
        return response.data;
    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error fetching activities:', error);
        throw new Error('Error fetching activities');
    }
};


