import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { performTradesAPI } from '../api/PerformTradesAPI.js';
import { updateStocksAPI } from '../api/UpdateStocks.js';
import { DataGrid } from '@mui/x-data-grid';

const TradePlatformPage = () => {
  // Placeholder user data
  const [userData, setUserData] = useState({
    sector: null,
    risk_category: null,
    newField: [], // New field for multi-select checkbox list
  });

  // State for form inputs
  const [formValues, setFormValues] = useState(userData);

  // State for stock options fetched from the updateStocksAPI
  const [stockOptions, setStockOptions] = useState([]);

  // State for selected stock options
  const [selectedStocks, setSelectedStocks] = useState([]);

  // State for storing the quantity input for each stock
  const [quantityInput, setQuantityInput] = useState({});

  const columns = [
    { field: 'ticker', headerName: 'Ticker', width: 70 },
    { field: 'company_name', headerName: 'Company Name', width: 200 },
    { field: 'risk_category', headerName: 'Risk', width: 30 },
    { field: 'predicted_returns', headerName: 'Returns', width: 100 },
    { field: 'market_cap', headerName: 'Market Cap', width: 100 },
    {
      field: 'quantity', 
      headerName: 'Quantity', 
      width: 100,
      renderCell: (params) => (
        <input
          type="number"
          value={quantityInput[params.row.ticker] || ''}
          onChange={(e) => handleQuantityChange(e, params.row.ticker)}
        />
      )
    }
    // Add more columns as needed
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  // Handle quantity input change
  const handleQuantityChange = (e, ticker) => {
    const { value } = e.target;
    setQuantityInput(prevState => ({
      ...prevState,
      [ticker]: value
    }));
  };

  // Handle form submission for updating stocks
  const handleUpdateStocks = async (e) => {
    e.preventDefault();
    
    // Check if both select fields have non-empty values
    if (!formValues.sector || !formValues.risk_category) {
      console.log('Please select values for both select fields.');
      return;
    }

    try {
      // Call the update stocks API with formValues
      const response = await updateStocksAPI(formValues);

      // Update the stockOptions directly with the response data
      setStockOptions(response);
    } catch (error) {
      console.error('Error updating stocks:', error);
    }
  };


  // Perform trade with all stocks
  const handlePerformTrade = async (e) => {
    e.preventDefault();
    try {
      // Prepare data for trade with quantities
      const tradeData = stockOptions.map(row => ({
        symbol: row.ticker,
        qty: quantityInput[row.ticker] || 0
      }));

      // Call the perform trade API with all stocks and quantities
      const responses = await performTradesAPI(tradeData);

      // Log or handle each response individually
      responses.forEach((response, index) => {
        console.log(`Trade ${index + 1} performed successfully:`, response);
      });

      // Clear selected stocks and quantity input after performing trade
      setSelectedStocks([]);
      setQuantityInput({});
    } catch (error) {
      console.error('Error performing trade:', error);
    }
  };

  return (
    <div className="background container">
      <div className="sidebar">
        <Sidebar/>
      </div>

      <div className='main'>
        <div className="profile-container">
          <h1>Stock Recommendations for Investment</h1>
          <form onSubmit={handleUpdateStocks} className="profile-form">

              <div className="form-group">
                <label htmlFor="sector">Sector </label>
                <select
                  id="sector"
                  name="sector"
                  onChange={handleInputChange}
                  value={formValues.sector || ''} // Ensure that the value is controlled by the state
                >
                  <option value="">Select Sector</option> {/* Placeholder option */}
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Industrials">Industrials</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Consumer Defensive">Consumer Defensive</option>
                  <option value="Communication Services">Communication Services</option>
                  <option value="Industrials">Basic Materials</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="risk_category">Risk Category</label>
                <select
                  id="risk_category"
                  name="risk_category"
                  onChange={handleInputChange}
                  value={formValues.risk_category || ''} // Ensure that the value is controlled by the state
                >
                  <option value="">Select Risk Category</option> {/* Placeholder option */}
                  <option value="0">Low</option>
                  <option value="1">Medium</option>
                  <option value="2">High</option>
                </select>
              </div>
                <button className="profile-button" type="submit">Get Recommendations</button>
                <p>Stocks with High predicted returns are diplayed below. Please select stocks and quantities to invest in your trade platform</p>
  
          </form>

          <form onSubmit={handlePerformTrade} className="checkbox-list form-container">
            <div className="data-grid-container">
             
              <DataGrid
                rows={stockOptions}
                columns={columns}
                //checkboxSelection
                //disableSelectionOnClick
                getRowId={(row) => row.ticker} // Specify 'ticker' as the unique identifier
              />
            </div>
            <br/>
            <button className="profile-button" type="submit">Perform Trade</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TradePlatformPage;
