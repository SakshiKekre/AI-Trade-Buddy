import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div className="background container">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>

      <div class="main">
        <div className="home-container">
          <h1>Managing Trades Made Simple!</h1>
          <p style={{textAlign: 'center'}}>
            <br/><br/>
            Navigating the financial markets is daunting, with traders facing vast data and rapid shifts. Existing tools often fall short, unable to adapt or predict accurately. 
            <br/><br/>
            Meet Trade Buddy, your ally in trading. Powered by advanced algorithms, it revolutionizes trading by analyzing trends and automating tasks. From paper trading to portfolio management, it optimizes risk-reward outcomes and reduces errors. Ready to make smarter financial decisions? Ask Trade Buddy for expert advice today.
          </p>

        </div>
      </div>

    </div>

  );
};

export default HomePage;
