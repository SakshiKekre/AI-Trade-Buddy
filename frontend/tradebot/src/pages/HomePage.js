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
        <div className="content-container">
          <h1>Welcome to our Fintech App!</h1>
          <p>
            <br/><br/>
            Fintech app to furnish trading insights...
          </p>
        </div>
      </div>

    </div>

  );
};

export default HomePage;
