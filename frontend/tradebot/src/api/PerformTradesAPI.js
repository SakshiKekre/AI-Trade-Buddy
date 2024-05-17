import axios from 'axios';

const BASE_URL = "http://127.0.0.1:5000"

// Function to perform trade with selected values
export const performTradesAPI = async (selectedSymbols) => {
    try {
      // Map over selectedSymbols and add additional properties
      const payload = selectedSymbols.map(({ symbol, qty }) => ({
        symbol: symbol,
        qty: qty,
        side: 'buy',
        type: 'market',
        time_in_force: 'gtc'
      }));

      // Convert the payload to JSON
      console.log('Payload before JSON :', payload);
      const jsonData = JSON.stringify(payload);
      console.log('Trades JSON Payload:', jsonData);

      // Make a POST request to the perform trade API endpoint with the JSON data
      const response = await axios.post(`${BASE_URL}/api/v1/trade`, jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Return the response data
      return response;
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error performing trade:', error);
      throw new Error('Error performing trade');
    }
};
