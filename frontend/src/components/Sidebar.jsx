import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h2>Career Platform</h2>

      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/resume-builder">Resume Builder</Link></li>
          <li><Link to="/job-tracker">Job Tracker</Link></li>
          <li><Link to="/placement-prep">Placement Prep</Link></li>
          <li><Link to="/admin">Admin Panel</Link></li>
          <li>
            <button onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;