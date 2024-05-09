import axios from 'axios';

const BASE_URL = "http://127.0.0.1:5000";

// Function to get positions
export const getAlpacaPositions = async () => {
    try {
        // Make a GET request to the positions
        const response = await axios.get(`${BASE_URL}/api/alpaca_positions`);

        // Return the response data
        return response.data;
    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error fetching positions:', error);
        throw new Error('Error fetching positions');
    }
};

export const getAlpacaAccountInfo = async () => {
    try {
        // Make a GET request to the positions
        const response = await axios.get(`${BASE_URL}/api/account_info`);

        // Return the response data
        console.log(response.data)

        return response.data;
    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error fetching account info:', error);
        throw new Error('Error fetching account info');
    }
};
