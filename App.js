import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = () => {
    axios.post("https://simpletask-api-staging.azurewebsites.net/api/user/authenticate", {
      userName: userName,
      password: password
    })
    .then(res => {
      if (res.data && res.data.userName) {
        setUser(res.data);
        setError("");
      } else {
        setError("Something went wrong");
      }
    })
    .catch(err => {
      setError("Login failed");
    });
  };

  if (user) {
    return (
      <div className="container">
        <div className="card">
          <h1 className="welcome">Welcome {user.userName}!</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        {error && <p className="error">{error}</p>}
        <button onClick={handleLogin} className="button">Login</button>
      </div>
    </div>
  );
}

export default App;