// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage setUserName={setUserName} />} />
          <Route path="/home" element={<HomePage userName={userName} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
