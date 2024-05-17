import axios from 'axios';

// const BASE_URL = "http://127.0.0.1:5000";
const BASE_URL = process.env.REACT_APP_BACKEND_API_URL;

// Function to perform trade with selected values
export const performTradeAPI = async (selectedSymbols) => {
    try {
      // Make an array to store responses for each trade
      const responses = [];
  
      // Iterate over selected symbols
      for (const symbol of selectedSymbols) {
        // Make a POST request to the perform trade API endpoint with the current symbol
        const response = await axios.post(`${BASE_URL}/api/trade`, {
          symbol: symbol,
          qty: 1, // Assuming the quantity is always 1 for each trade
        });
  
        // Add the response to the responses array
        responses.push(response.data);
      }
  
      // Return the array of responses
      return responses;
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error performing trade:', error);
      throw new Error('Error performing trade');
    }
  };
