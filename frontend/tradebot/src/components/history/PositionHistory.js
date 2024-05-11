// PositionHistory.js
import React from 'react';

const PositionHistory = ({ data , accountInfo}) => {
  return (
    <div className="trade-history">
      {/* Displaying account information */}
      <div className="account-info">
      <h3>Holdings Overview</h3>
      <div className="info-row">
        <span className="label">Total Cash Available for Trading:</span>
        <span className="value">${accountInfo.total_cash}</span>
      </div>
      <div className="info-row">
        <span className="label">Total Portfolio Value:</span>
        <span className="value">${accountInfo.portfolio_value}</span>
      </div>
      <div className="info-row">
        <span className="label">Total Positions Value:</span>
        <span className="value">${accountInfo.position_market_values}</span>
      </div>
    </div>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Quantity Available</th>
            <th>Avg. Entry Price</th>
            <th>Current Price</th>
            <th>Profit/Loss</th> {/* Added Profit/Loss column header */}
            <th>Market Value</th>
            {/* <th>Side</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((position) => {
            // Calculate Profit/Loss
            const profitLoss = (position.current_price - position.avg_entry_price) * position.qty_available;
            
            return (
              <tr key={position.asset_id}>
                <td>{position.symbol}</td>
                <td>{position.qty}</td>
                <td>{position.qty_available}</td>
                <td>{parseFloat(position.avg_entry_price).toFixed(2)}</td> {/* Rounded to two decimal places */}
                <td>{parseFloat(position.current_price).toFixed(2)}</td> {/* Rounded to two decimal places */}
                <td>{profitLoss.toFixed(2)}</td> {/* Display Profit/Loss rounded to two decimal places */}
                <td>{parseFloat(position.market_value).toFixed(2)}</td> {/* Assuming market value should also be rounded */}

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PositionHistory;
