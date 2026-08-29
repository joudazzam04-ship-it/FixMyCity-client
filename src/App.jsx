import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import CitizenDashboard from "./pages/CitizenDashboard.jsx";
import ReportIssue from "./pages/ReportIssue.jsx";
import MyReports from "./pages/MyReports.jsx";
import ReportDetails from "./pages/ReportDetails.jsx";
import EmployeeDashboard from "./pages/EmployeeDashboard.jsx";
import EmployeeUpdates from "./pages/EmployeeUpdate.jsx";
import EmployeeUpdateDetails from "./pages/EmployeeUpdateDetails.jsx";

import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

const [reports, setReports] = useState([
  {
    id: 1,
    title: "Pothole on Main Street",
    department: "Road Maintenance",
    location: "Main St, Downtown",
    assignedDate: "May 12, 2026",
    status: "In Progress"
  },
  {
    id: 2,
    title: "Broken Streetlight",
    department: "Street Lighting",
    location: "Oak Ave, Block 12",
    assignedDate: "May 10, 2026",
    status: "Assigned"
  },
  {
    id: 3,
    title: "Water Leak Near Sidewalk",
    department: "Water & Sewer",
    location: "Pine Rd, Near #45",
    assignedDate: "May 9, 2026",
    status: "In Progress"
  }
]);

  return (

    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/citizen/dashboard"
          element={<CitizenDashboard />}
        />

        <Route
          path="/citizen/report"
          element={<ReportIssue />}
        />
        <Route
          path="/citizen/reports"
          element={<MyReports />}
        />
        <Route
          path="/citizen/reports/:id"
          element={<ReportDetails />}
        />
        <Route
  path="/employee/dashboard"
  element={<EmployeeDashboard reports={reports} />}
/>
<Route
  path="/employee/updates"
  element={<EmployeeUpdates reports={reports} />}
/>

<Route
  path="/employee/updates/:id"
  element={
    <EmployeeUpdateDetails
      reports={reports}
      setReports={setReports}
    />
  }
/>

      </Routes>
    </Router>
  );
}

export default App;