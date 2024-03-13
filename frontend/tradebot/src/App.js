import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Switch directly
import './App.css';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import TradePage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <header>
            {/* You can include any header content here */}
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/chat" element={<TradePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
