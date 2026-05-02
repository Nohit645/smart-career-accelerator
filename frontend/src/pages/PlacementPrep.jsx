import React from "react";
import Sidebar from "../components/Sidebar";

function PlacementPrep() {
  return (
    <div>
      <Sidebar />

      <div className="placement-container" style={{ marginLeft: "270px" }}>
        <h1>Placement Preparation</h1>

        <div className="prep-card">
          <h2>Aptitude Practice</h2>
          <p>50 Questions Completed</p>
        </div>

        <div className="prep-card">
          <h2>Technical MCQs</h2>
          <p>30 Questions Completed</p>
        </div>

        <div className="prep-card">
          <h2>Coding Challenges</h2>
          <p>15 Problems Solved</p>
        </div>

        <div className="prep-card">
          <h2>Mock Interview</h2>
          <p>Next Interview: Tomorrow 10 AM</p>
        </div>
      </div>
    </div>
  );
}

export default PlacementPrep;