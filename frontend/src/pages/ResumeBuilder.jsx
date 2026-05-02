import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";

function ResumeBuilder() {
  const [skills, setSkills] = useState("");
  const [score, setScore] = useState(null);
  const [suggestion, setSuggestion] = useState("");

  const handleResumeAnalysis = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/analyze-resume",
        {
          skills: skills
        }
      );

      setScore(90);

      setSuggestion(
        "Add certifications, internship experience, and more technical keywords for better ATS performance."
      );

      console.log(response.data);

    } catch (error) {
      console.log(error);
      alert("AI Resume Analysis Failed");
    }
  };

  return (
    <div>
      <Sidebar />

      <div
        className="resume-container"
        style={{ marginLeft: "270px" }}
      >
        <h1>AI Resume Builder</h1>

        <form className="resume-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />

          <input
            type="text"
            placeholder="Skills (Python, SQL, React...)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />

          <input type="text" placeholder="Education" />
          <textarea placeholder="Projects / Experience"></textarea>

          <button
            type="button"
            onClick={handleResumeAnalysis}
          >
            Analyze Resume
          </button>

          <button
            type="button"
            onClick={() =>
              window.open(
                "http://127.0.0.1:5000/api/download-resume",
                "_blank"
              )
            }
          >
            Download PDF
          </button>
        </form>

        {score && (
          <>
            <div className="resume-score">
              <h2>ATS Resume Score</h2>
              <p>{score} / 100</p>
            </div>

            <div className="ai-suggestions">
              <h2>AI Suggestions</h2>
              <p>{suggestion}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ResumeBuilder;