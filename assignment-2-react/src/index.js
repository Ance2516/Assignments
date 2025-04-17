import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: You can add a CSS file to style the app
import App from './App';

// Render the root component inside the div with id="root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
