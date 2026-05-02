import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/register",
        {
          full_name: fullName,
          email,
          password
        }
      );

      alert(response.data.message);

      navigate("/");

    } catch (error) {
      console.log(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="login-container">
      <h1>Smart Career Accelerator</h1>
      <h2>Student Registration</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;