// MetricsPage.js
import React, { useState, useEffect } from 'react';

import Dashboard from '../components/dashboard/Dashboard';
import OrderHistory from '../components/history/OrderHistory';
import Sidebar from '../components/Sidebar';
import DashboardMain from '../components/DashboardMain';
import PositionHistory from '../components/history/PositionHistory';
import { getAlpacaPositions } from '../api/GetPositions'

  // Sample data for demonstration
  const dashboardData = {
    totalProfitLoss: 1500,
    winRate: 0.75,
    averageReturnPerTrade: 50,
    totalTrades: 20,
  };

  const tradeHistoryData = [
    { id: 1, pdate: '2024-03-10', sdate: '2024-03-15', symbol: 'AAPL', quantity: '1', entryPrice: 150, exitPrice: 160, profitLoss: 10 },
    { id: 2, pdate: '2024-03-10', sdate: '2024-03-15', symbol: 'GOOG', quantity: '5', entryPrice: 2500, exitPrice: 2600, profitLoss: 100 },
    // Add more trade history data as needed
  ];


const MetricsPage = () => {


  const [orderHistory, setOrderHistory] = useState([]);
  const [positionHistory, setPositionHistory] = useState([]);

    // fetch active positions
    const fetchPositionHistory = async () => {
      try {
        // Call the update stocks API with formValues
        const response = await getAlpacaPositions();
        setPositionHistory(response);
      } catch (error) {
        console.error('Error fetching positions:', error);
      }
    };

  useEffect(() => {
      const fetchData = async () => {
          try {
              const orderHistoryData = await fetchPositionHistory();
              setOrderHistory(orderHistoryData);
          } catch (error) {
              console.error('Error fetching positions history:', error);
          }
      };

      fetchData();
  }, []);

  return (
    <div className='background container'>
      <div className='sidebar'>
        <Sidebar></Sidebar>
      </div>
      <div className='main'>
        <div className="content-container">
          {/* <Dashboard data={dashboardData} /> */}
          {/* <OrderHistory data={tradeHistoryData} /> */}
          <PositionHistory data={positionHistory} />
        </div>
      </div>
    </div>
    // <div>
    //     <div>
    //       {/* <Sidebar></Sidebar> */}
    //     </div>
    //     <div>
    //       <DashboardMain></DashboardMain>
    //     </div>
    // </div>
  );
};

export default MetricsPage;
