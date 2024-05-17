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
            <img src='/aapl_1.png'  alt=" Test Results"/>
            <img src='/aapl_2.png'  alt=" Test Results"/>
          </p>
          <p style={{textAlign: 'center'}}>
            <img src='/AAPL.png'  alt=" Test Results"/>
          </p>
          <p style={{textAlign: 'center'}}>
            <img src='/NVDA.png'  alt=" Test Results"/>
          </p>
          <p style={{textAlign: 'center'}}>
            <img src='/BA.png'  alt=" Test Results"/>
          </p>
          <p style={{textAlign: 'center'}}>
            <img src='/TSLA.png'  alt=" Test Results"/>
          </p>
        </div>
      </div>

    </div>

  );
};

export default TestingResultsPage;
