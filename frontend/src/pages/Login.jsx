// frontend/src/pages/Login.jsx

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/login",
        {
          email,
          password
        }
      );

      if (response.data.message === "Login Successful") {
        // Save login state
        localStorage.setItem("isLoggedIn", "true");

        alert("Welcome Back!");
        navigate("/dashboard");
      } else {
        alert("Invalid Credentials");
      }

    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="login-container">
      <h1>Smart Career Accelerator</h1>
      <h2>Student Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;