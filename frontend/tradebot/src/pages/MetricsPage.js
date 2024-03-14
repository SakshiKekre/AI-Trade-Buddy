// MetricsPage.js
import React from 'react';
import Dashboard from './Dashboard';
import TradeHistoryTable from './TradeHistory';


  // Sample data for demonstration
  const dashboardData = {
    totalProfitLoss: 1500,
    winRate: 0.75,
    averageReturnPerTrade: 50,
    totalTrades: 20,
  };

  const tradeHistoryData = [
    { id: 1, date: '2024-03-10', symbol: 'AAPL', entryPrice: 150, exitPrice: 160, profitLoss: 100 },
    { id: 2, date: '2024-03-11', symbol: 'GOOG', entryPrice: 2500, exitPrice: 2600, profitLoss: 150 },
    // Add more trade history data as needed
  ];

// const MetricsPage = ({ dashboardData, tradeHistoryData }) => {       // uncomment when backend is integrated to get data
const MetricsPage = () => {
  return (
    <div className="metrics-page">
      <Dashboard data={dashboardData} />
      <TradeHistoryTable data={tradeHistoryData} />
    </div>
  );
};

export default MetricsPage;
