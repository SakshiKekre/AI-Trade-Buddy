// PositionHistory.js
import React from 'react';

const PositionHistory = ({ data }) => {
  return (
    <div className="trade-history">
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Quantity Available</th>
            <th>Average Entry Price</th>
            <th>Current Price</th>
            {/* <th>Exchange</th> */}
            <th>Market Value</th>
            {/* <th>Side</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((position) => (
            <tr key={position.asset_id}>
              <td>{position.symbol}</td>
              <td>{position.qty}</td>
              <td>{position.qty_available}</td>
              <td>{position.avg_entry_price}</td>
              <td>{position.current_price}</td>
              {/* <td>{position.exchange}</td> */}
              <td>{position.market_value}</td>
              {/* <td>{position.side}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PositionHistory;
