import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState({
    resume_score: 0,
    applications: 0,
    placement_progress: 0
  });

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/dashboard")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Sidebar />

      <div className="dashboard-container" style={{ marginLeft: "270px" }}>
        <h1>Student Dashboard</h1>

        <div className="cards">
          <div className="card">
            <h2>Resume Score</h2>
            <p>{data.resume_score}%</p>
          </div>

          <div className="card">
            <h2>Applications</h2>
            <p>{data.applications} Jobs Applied</p>
          </div>

          <div className="card">
            <h2>Placement Progress</h2>
            <p>{data.placement_progress}% Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;