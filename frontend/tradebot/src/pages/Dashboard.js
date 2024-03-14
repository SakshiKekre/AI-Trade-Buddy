// Dashboard.js
import React from 'react';

const Dashboard = ({ data }) => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="metric">
        <div>Total Profit/Loss</div>
        <div>${data.totalProfitLoss}</div>
      </div>
      <div className="metric">
        <div>Win Rate</div>
        <div>{(data.winRate * 100).toFixed(2)}%</div>
      </div>
      <div className="metric">
        <div>Average Return per Trade</div>
        <div>${data.averageReturnPerTrade}</div>
      </div>
      <div className="metric">
        <div>Total Trades (Quantity)</div>
        <div>{data.totalTrades}</div>
      </div>
    </div>
  );
};

export default Dashboard;
