// OrderHistory.js
import React from 'react';

const OrderHistory = ({ data }) => {
  return (
    <div className="trade-history">
      <table>
        <thead>
          <tr>
            <th>Trade Platform </th>
            <th>Trade Type</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Value</th>
            <th>Trade Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((trade) => (
            <tr key={trade.trade_id}>
              <td>Alpaca</td>
              <td>{trade.trade_type.toUpperCase()}</td>
              <td>{trade.symbol}</td>
              <td>${trade.price}</td>
              <td>{trade.quantity}</td>
              <td>{trade.total_value ? `$${trade.total_value}` : 'N/A'}</td>
              <td>{trade.trade_date ? new Date(trade.trade_date).toLocaleDateString() : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
