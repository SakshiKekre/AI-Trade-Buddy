import React, { useState, useEffect } from 'react';
import { Tab, Tabs, Typography, Box } from '@mui/material';

import Sidebar from '../components/Sidebar';
import PositionHistory from '../components/history/PositionHistory';
import OrderHistory from '../components/history/OrderHistory';
import { getAlpacaPositions } from '../api/GetPositions';
import { getAllTradeActivities } from '../api/GetActivities';

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const TwoTabsPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [positionHistory, setPositionHistory] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    // Fetch position history only when the first tab is selected
    if (newValue === 0) {
      fetchPositionHistory();
    }
    else if (newValue === 1) {
        fetchAllTradeActivities();
    }
  };

  // Fetch position history
  const fetchPositionHistory = async () => {
    try {
      const response = await getAlpacaPositions();
      setPositionHistory(response);
    } catch (error) {
      console.error('Error fetching positions:', error);
    }
  };

  // Fetch all trade activities
  const fetchAllTradeActivities = async () => {
    try {
      const response = await getAllTradeActivities();
      setOrderHistory(response);
    } catch (error) {
      console.error('Error fetching trade activities:', error);
    }
  };

  useEffect(() => {
    // Fetch all trade activities when component mounts
    fetchAllTradeActivities();
  }, []);

  return (
    <div className='background container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='profile-container'>
        <Tabs value={tabValue} onChange={handleChange} aria-label="tabs">
          <Tab label="Positions" />
          <Tab label="All Trade Activities" />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <PositionHistory data={positionHistory} />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <OrderHistory data={orderHistory} />
        </TabPanel>
      </div>
    </div>
  );
};

export default TwoTabsPage;
