import React from 'react';

const HomePage = () => {
  return (
    <div class="profile-container">
      <h1>Welcome to our Fintech App!</h1>
      <ul>
        <li><a href="/profile">Go to Profile</a></li>
        <li><a href="/chat">Go to Trade Chat-Bot</a></li>
        <li><a href="/metrics">Go to Performance Metrics</a></li>
      </ul>
    </div>
  );
};

export default HomePage;
