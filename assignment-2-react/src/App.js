// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LoginPage setUserName={setUserName} />
          </Route>
          <Route path="/home">
            <HomePage userName={userName} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
