import React from "react";
import Sidebar from "../components/Sidebar";

function JobTracker() {
  return (
    <div>
      <Sidebar />

      <div className="job-container" style={{ marginLeft: "270px" }}>
        <h1>Job Tracker</h1>

        <div className="job-card">
          <h2>Software Engineer Intern</h2>
          <p>Company: Infosys</p>
          <p>Status: Applied</p>
          <p>Deadline: 15 May 2026</p>
        </div>

        <div className="job-card">
          <h2>Frontend Developer</h2>
          <p>Company: TCS</p>
          <p>Status: Interview Scheduled</p>
          <p>Deadline: 20 May 2026</p>
        </div>
      </div>
    </div>
  );
}

export default JobTracker;