// frontend/src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import JobTracker from "./pages/JobTracker";
import PlacementPrep from "./pages/PlacementPrep";
import AdminPanel from "./pages/AdminPanel";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/resume-builder"
        element={
          <ProtectedRoute>
            <ResumeBuilder />
          </ProtectedRoute>
        }
      />

      <Route
        path="/job-tracker"
        element={
          <ProtectedRoute>
            <JobTracker />
          </ProtectedRoute>
        }
      />

      <Route
        path="/placement-prep"
        element={
          <ProtectedRoute>
            <PlacementPrep />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;