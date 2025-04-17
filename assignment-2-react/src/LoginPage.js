import React, { useState } from 'react';
import axios from 'axios';

function LoginPage({ setUserName }) {
  const [username, setUsername] = useState(''); // Renamed local state to 'username' and setter to 'setUsername'
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = {
      userName: username, // Use the local 'username' state here
      password: password,
    };

    try {
      const response = await axios.post(
        'https://simpletask-api-staging.azurewebsites.net/api/user/authenticate',
        payload
      );

      if (response.data) {
        setUserName(username); // Use the local 'username' to update the parent's state
        // Redirect to HomePage (you can use routing here, or just set it to show home)
        window.location.href = '/home';
      }
    } catch (err) {
      setError('Login failed, please check your credentials.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            value={username} // Use the local 'username' state here
            onChange={(e) => setUsername(e.target.value)} // Use the local 'setUsername' setter
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
        {error && <div>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;