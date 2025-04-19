import React, { useState } from 'react';
import axios from 'axios';
import './index';

function LoginPage({ setUserName }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = {
      userName: username,
      password: password,
    };

    try {
      const response = await axios.post(
        'https://simpletask-api-staging.azurewebsites.net/api/user/authenticate',
        payload
      );

      if (response.data) {
        setUserName(username);
        window.location.href = '/home';
      }
    } catch (err) {
      setError('Login failed, please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
