// MetricsPage.js
import React from 'react';
import Dashboard from './Dashboard';
import TradeHistoryTable from './TradeHistory';
import Sidebar from '../components/Sidebar';

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

// const MetricsPage = ({ dashboardData, tradeHistoryData }) => {       // uncomment when backend is integrated to get data
const MetricsPage = () => {
  return (
    <div className='background container'>
      <div className='sidebar'>
        <Sidebar></Sidebar>
      </div>
      <div className='main'>
        <div className="content-container">
          <Dashboard data={dashboardData} />
          <TradeHistoryTable data={tradeHistoryData} />
        </div>
      </div>
    </div>
  );
};

export default MetricsPage;
