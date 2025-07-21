import React from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear JWT or any auth data
    navigate("/login"); // Redirect to login/register page
  };

  return (
    <div className="dashboard-container">
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <h1 className="dashboard-title">👋 Welcome to your Dashboard</h1>
      <p className="dashboard-subtitle">
        Manage your account, check recent activity, and explore features.
      </p>

      <div className="dashboard-cards">
        <div className="card">
          <h2>🔐 Secure Access</h2>
          <p>Your account is protected with modern authentication.</p>
        </div>

        <div className="card">
          <h2>🕒 Recent Activity</h2>
          <p>Stay up to date with everything you've done recently.</p>
        </div>

        <div className="card">
          <h2>⚙️ Settings</h2>
          <p>Customize your profile and change your preferences.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
