import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <React.Fragment>  

      <div>
        {/* <Header>

        </Header> */}
        <Sidebar></Sidebar>
      </div>
      <div class="home-container">
        <h1>Welcome to our Fintech App!</h1>
        <img src="https://cdn2.etrade.net/1/20033018150.0/aempros/content/dam/etrade/retail/en_US/images/what-we-offer/investment-choices/options-call-put.jpg">

        </img>
        <p>
          Some nice intro here
        </p>
        {/* <ul>
          <li><a href="/profile">Go to Profile</a></li>
          <li><a href="/chat">Go to Trade Chat-Bot</a></li>
          <li><a href="/metrics">Go to Performance Metrics</a></li>
        </ul> */}
      </div>
    </React.Fragment>

  );
};

export default HomePage;
