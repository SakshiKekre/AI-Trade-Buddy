import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const TestingResultsPage = () => {
  return (
    <div className="background container">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>

      <div class="main">
        <div className="home-container">
          <h1>Testing Results</h1>
          <p style={{textAlign: 'center'}}>
            <img src='/AAPL.png'  alt="AAPL Test Results"/>
          </p>

        </div>
      </div>

    </div>

  );
};

export default TestingResultsPage;
