// TradeHistoryTable.js
import React from 'react';

const TradeHistory = ({ data }) => {
  return (
    <div className="trade-history">
      <h2>Trade History</h2>
      <table>
        <thead>
          <tr>
            <th>Purchase Date</th>
            <th>Sell Date</th>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Entry Price</th>
            <th>Exit Price</th>
            <th>Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {data.map((trade) => (
            <tr key={trade.id}>
              <td>{trade.pdate}</td>
              <td>{trade.sdate}</td>
              <td>{trade.symbol}</td>
              <td>{trade.quantity}</td>
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
