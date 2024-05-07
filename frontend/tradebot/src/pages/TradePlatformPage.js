import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { performTradeAPI } from '../api/PerformTrade.js';
import { updateStocksAPI } from '../api/UpdateStocks.js';

const TradePlatformPage = () => {
  // Placeholder user data
  const [userData, setUserData] = useState({
    index: 'DOW',
    platform: 'Alpaca',
    risk: 'Low',
    perc_alloc: '50%',
    // Add more fields as needed
    newField: [], // New field for multi-select checkbox list
  });

  // State for form inputs
  const [formValues, setFormValues] = useState(userData);

  // State for stock options fetched from the updateStocksAPI
  const [stockOptions, setStockOptions] = useState([]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle checkbox changes for the new field
  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target;
    if (checked) {
      setFormValues({ ...formValues, [name]: [...formValues[name], value] });
    } else {
      setFormValues({ ...formValues, [name]: formValues[name].filter(item => item !== value) });
    }
  };

  // Handle form submission for updating stocks
  const handleUpdateStocks = async (e) => {
    e.preventDefault();
    try {
      // Call the update stocks API with formValues
      const response = await updateStocksAPI(formValues);
      // Extract the stock options from the response data
      const stocks = response.map(stock => ({
        label: stock.CompanyName,
        value: stock.StockTicker
      }));
      // Update the stockOptions based on the extracted stock options
      setStockOptions(stocks);
    } catch (error) {
      console.error('Error updating stocks:', error);
    }
  };


  // Handle form submission for performing trade
  const handlePerformTrade = async (e) => {
    e.preventDefault();
    try {
      // Get selected symbols from formValues
      const symbols = formValues.newField;
      
      // Make sure at least one symbol is selected
      if (symbols.length === 0) {
        console.error('No symbols selected for trade');
        return;
      }

      // Call the perform trade API with selected symbols
      const responses = await performTradeAPI(symbols);

      // Log or handle each response individually
      responses.forEach((response, index) => {
        console.log(`Trade ${index + 1} performed successfully:`, response);
      });
    } catch (error) {
      console.error('Error performing trade:', error);
    }
  };


  // // Fetch initial stock options when component mounts
  // useEffect(() => {
  //   const fetchStockOptions = async () => {
  //     try {
  //       const response = await updateStocksAPI(formValues);
  //       setStockOptions(response.stocks);
  //     } catch (error) {
  //       console.error('Error fetching stock options:', error);
  //     }
  //   };
  //   fetchStockOptions();
  // }, []); // Empty dependency array ensures this effect runs only once when component mounts
  

  return (
    <div className="background container">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>

      <div className='main'>
        <div className="profile-container">
          <h1>Create Trade Order</h1>
          <form onSubmit={handleUpdateStocks} className="profile-info form-container">
            <br/>
            <h2>Trade Preferences</h2>

            <div id="tradePreferences" className='form-container'>
            <div className="form-field">
                <div className="form-field">
                <label htmlFor="index">Index:</label>
                <select
                  id="index"
                  name="index"
                  value={formValues.index}
                  onChange={handleInputChange}
                >
                  <option value="DOW">DOW</option>
                  <option value="NASDAQ">NASDAQ</option>
                  <option value="S&P">S&P</option>
                </select>
              </div>
              </div>

              <div className="form-field">
                <label htmlFor="platform">Platform:</label>
                <select
                  id="platform"
                  name="platform"
                  value={formValues.platform}
                  onChange={handleInputChange}
                >
                  <option value="Alpaca">Alpaca</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="riskLevel">Risk Level:</label>
                <select
                  id="riskLevel"
                  name="riskLevel"
                  value={formValues.riskLevel}
                  onChange={handleInputChange}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="user_market_cap">Percentage of Allocation:</label>
                <input
                  type="text"
                  id="perc_alloc"
                  name="perc_alloc"
                  value={formValues.user_market_cap}
                  onChange={handleInputChange}
                />
              </div>
              <button className="profile-button" type="submit">Update Stocks</button>
            </div>
          </form>

          {/* New field for multi-select checkbox list */}
          <form onSubmit={handlePerformTrade} className="checkbox-list form-container">
            <h2>Stock Options</h2>
            <div className='stock-container'>
              {stockOptions.map((stock, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    name="newField"
                    value={stock.value} // Use the value property from stockOptions
                    checked={formValues.newField.includes(stock.value)}
                    onChange={handleCheckboxChange}
                  /> {stock.label}
                </label>
              ))}
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
