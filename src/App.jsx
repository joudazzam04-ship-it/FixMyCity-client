import Home from "./pages/Home/Home.jsx";
import About from "./pages/Home/About.jsx";
import CitizenDashboard from "./pages/Citizen/CitizenDashboard.jsx";
import ReportIssue from "./pages/Citizen/ReportIssue.jsx";
import MyReports from "./pages/Citizen/MyReports.jsx";
import ReportDetails from "./pages/Citizen/ReportDetails.jsx";
import EmployeeDashboard from "./pages/Emp/EmployeeDashboard.jsx";
import EmployeeUpdates from "./pages/Emp/EmployeeUpdate.jsx";
import EmployeeUpdateDetails from "./pages/Emp/EmployeeUpdateDetails.jsx";

import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

const [reports, setReports] = useState([
  {
    id: 1,
    title: "Pothole on Main Street",
    category: "Road Damage",
    department: "Road Maintenance",
    location: "Main St, Downtown",
    assignedDate: "May 12, 2026",
    reportedDate: "May 18, 2026",
    status: "In Progress",
    description: "Large pothole causing problems for cars.",

    priority: "Medium",

    notes: [
      {
        id: 1,
        department: "Road Maintenance",
        message: "Our team has started working on this issue.",
        date: "May 20, 2026"
      }
    ],

    progressImages: [],

    history: [
      {
        status: "Reported",
        date: "May 18, 2026"
      },
      {
        status: "Assigned",
        date: "May 19, 2026"
      },
      {
        status: "In Progress",
        date: "May 20, 2026"
      }
    ]
  },

  {
    id: 2,
    title: "Broken Streetlight",
    category: "Streetlight",
    department: "Street Lighting",
    location: "Oak Ave, Block 12",
    assignedDate: "May 10, 2026",
    reportedDate: "May 17, 2026",
    status: "Assigned",
    description: "Streetlight is not working during the night.",

    priority: "Medium",

    notes: [],

    progressImages: [],

    history: [
      {
        status: "Reported",
        date: "May 17, 2026"
      },
      {
        status: "Assigned",
        date: "May 18, 2026"
      }
    ]
  },

  {
    id: 3,
    title: "Water Leak Near Sidewalk",
    category: "Water Leak",
    department: "Water & Sewer",
    location: "Pine Rd, Near #45",
    assignedDate: "May 9, 2026",
    reportedDate: "May 16, 2026",
    status: "In Progress",
    description: "Water is leaking near the sidewalk.",

    priority: "Medium",

    notes: [],

    progressImages: [],

    history: [
      {
        status: "Reported",
        date: "May 16, 2026"
      },
      {
        status: "Assigned",
        date: "May 17, 2026"
      },
      {
        status: "In Progress",
        date: "May 18, 2026"
      }
    ]
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
  element={<MyReports reports={reports} />}
/>
        <Route
  path="/citizen/reports/:id"
  element={<ReportDetails reports={reports} />}
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