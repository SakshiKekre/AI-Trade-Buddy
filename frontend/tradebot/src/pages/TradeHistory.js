// TradeHistoryTable.js
import React from 'react';

const TradeHistory = ({ data }) => {
  return (
    <div className="trade-history">
      <h2>Trade History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Symbol</th>
            <th>Entry Price</th>
            <th>Exit Price</th>
            <th>Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {data.map((trade) => (
            <tr key={trade.id}>
              <td>{trade.date}</td>
              <td>{trade.symbol}</td>
              <td>${trade.entryPrice}</td>
              <td>${trade.exitPrice}</td>
              <td>${trade.profitLoss}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistory;
