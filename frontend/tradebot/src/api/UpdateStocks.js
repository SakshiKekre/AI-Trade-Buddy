import axios from 'axios';

const BASE_URL = "http://127.0.0.1:5000"


// Function to update stocks with formValues
export const updateStocksAPI = async (formValues) => {
    try {
      // Make a GET request to the update stocks API endpoint with query parameters
      const response = await axios.get(`${BASE_URL}/api/stock_predictions`, {

        params: formValues // formValues will be sent as query parameters
      });
      console.log('UpdateStockresponse', response.data);
      
      // Return the response data
      return response.data;
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error updating stocks:', error);
      throw new Error('Error updating stocks');
    }
  };
