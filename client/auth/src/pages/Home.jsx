import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-box">
        <h1>Welcome to AuthHub 🔐</h1>
        <p>Please log in or register to access your dashboard.</p>
        <div className="home-buttons">
          <Link to="/login" className="btn login-btn">
            Login
          </Link>
          <Link to="/register" className="btn register-btn">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
