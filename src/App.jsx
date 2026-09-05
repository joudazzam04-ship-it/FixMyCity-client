import Home from "./pages/Home/Home.jsx";
import About from "./pages/Home/About.jsx";
import CitizenDashboard from "./pages/Citizen/CitizenDashboard.jsx";
import ReportIssue from "./pages/Citizen/ReportIssue.jsx";
import MyReports from "./pages/Citizen/MyReports.jsx";
import ReportDetails from "./pages/Citizen/ReportDetails.jsx";

import EmployeeDashboard from "./pages/Emp/EmployeeDashboard.jsx";
import EmployeeUpdates from "./pages/Emp/EmployeeUpdate.jsx";
import EmployeeUpdateDetails from "./pages/Emp/EmployeeUpdateDetails.jsx";

import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import AdminReports from "./pages/Admin/AdminReports.jsx";
import ManageUsers from "./pages/Admin/ManageUsers.jsx";
import AssignReport from "./pages/Admin/AssignReport.jsx";

import Login from "./pages/Auth/LoginPage.jsx";
import Register from "./pages/Auth/RegisterPage.jsx";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // The logged-in user is read once from localStorage so a page refresh
  // keeps the session. Every page fetches its own data from the API.
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/register"
          element={<Register setCurrentUser={setCurrentUser} />}
        />

        <Route
          path="/citizen/dashboard"
          element={<CitizenDashboard currentUser={currentUser} setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/citizen/report"
          element={<ReportIssue currentUser={currentUser} setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/citizen/reports"
          element={<MyReports currentUser={currentUser} setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/citizen/reports/:id"
          element={<ReportDetails currentUser={currentUser} setCurrentUser={setCurrentUser} />}
        />

        <Route
          path="/employee/dashboard"
          element={<EmployeeDashboard currentUser={currentUser} setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/employee/updates"
          element={<EmployeeUpdates currentUser={currentUser} setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/employee/updates/:id"
          element={<EmployeeUpdateDetails currentUser={currentUser} setCurrentUser={setCurrentUser} />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard currentUser={currentUser} setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/admin/reports"
          element={<AdminReports currentUser={currentUser} setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/admin/users"
          element={<ManageUsers currentUser={currentUser} setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/admin/reports/:id/assign"
          element={<AssignReport currentUser={currentUser} setCurrentUser={setCurrentUser} />}
        />

      </Routes>
    </Router>
  );
}

export default App;