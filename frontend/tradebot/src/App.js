import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Switch directly
import './App.css';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import TradePage from './pages/ChatPage';
import MetricsPage from './pages/TabbedHistory';
import TradePlatformPage from './pages/TradePlatformPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/chat" element={<TradePage />} />
            <Route path="/metrics" element={<MetricsPage />} />
            <Route path="/trade" element={<TradePlatformPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
