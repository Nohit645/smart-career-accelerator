import React from "react";
import Sidebar from "../components/Sidebar";

function AdminPanel() {
  return (
    <div>
      <Sidebar />

      <div className="admin-container" style={{ marginLeft: "270px" }}>
        <h1>Admin Panel</h1>

        <div className="admin-card">
          <h2>Total Students</h2>
          <p>245 Students Registered</p>
        </div>

        <div className="admin-card">
          <h2>Job Notifications</h2>
          <p>18 Active Openings</p>
        </div>

        <div className="admin-card">
          <h2>Resume Analytics</h2>
          <p>Average ATS Score: 78%</p>
        </div>

        <div className="admin-card">
          <h2>Placement Performance</h2>
          <p>72% Students Placement Ready</p>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;