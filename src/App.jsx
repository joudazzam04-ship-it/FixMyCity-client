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


import pothole from "./assets/pothole.jpg";
import streetlight from "./assets/streetlight.jpg";
import waterLeak from "./assets/waterLeak.jpg";;

import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const departments = [
  "Road Maintenance",
  "Street Lighting",
  "Water & Sewer",
  "Waste Management",
  "Public Works"
];

function App() {

  const [users, setUsers] = useState([
  { id: 101, name: "Ahmad Omar", role: "citizen", email: "ahmad@gmail.com", password: "123456", phone: "+962 7 9123 4567", status: "Active", joinedOn: "May 12, 2025", department: null },
  { id: 102, name: "Lina Mahmoud", role: "citizen", email: "lina@gmail.com", password: "123456", phone: "+962 7 9456 7890", status: "Active", joinedOn: "May 10, 2025", department: null },
  { id: 201, name: "Ahmad Al-Hassan", role: "employee", email: "ahmad.hassan@pw.gov.jo", password: "123456", phone: "+962 7 9123 4567", status: "Active", joinedOn: "May 12, 2025", department: "Road Maintenance" },
  { id: 202, name: "Sara Ali", role: "employee", email: "sara.ali@maintenance.gov.jo", password: "123456", phone: "+962 7 9234 5678", status: "Active", joinedOn: "April 28, 2025", department: "Street Lighting" },
  { id: 203, name: "Omar Khalid", role: "employee", email: "omar.khalid@wm.gov.jo", password: "123456", phone: "+962 7 9345 6789", status: "Active", joinedOn: "May 5, 2025", department: "Water & Sewer" },
  { id: 301, name: "Admin User", role: "admin", email: "admin@fixmycity.jo", password: "admin123", phone: "+962 7 9000 0000", status: "Active", joinedOn: "Jan 3, 2025", department: null }
]);

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


    reportedBy: 101,
assignedTo: 201,
priority: "Medium",
adminNote: "",

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

reportedBy: 102,
assignedTo: 202,
priority: "High",
adminNote: "",
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

reportedBy: 101,
assignedTo: 203,
priority: "Low",
adminNote: "",
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
  }, 
  {
  id: 4,
  title: "Garbage Not Collected",
  category: "Waste",
  location: "Hilltop Colony, Block 3",
  reportedDate: "May 21, 2026",
  description: "Garbage has not been collected for over a week and it smells bad.",
  status: "Pending Review",

  reportedBy: 102,
  department: null,
  assignedTo: null,
  assignedDate: null,
  priority: null,
  adminNote: "",

  notes: [],
  progressImages: [],

  history: [
    {
      status: "Pending Review",
      date: "May 21, 2026"
    }
  ]
}
  
  
]);

const [currentUser, setCurrentUser] = useState(null);




  return (

    
    <Router>
      <Routes>
        <Route
  path="/login"
  element={<Login users={users} setCurrentUser={setCurrentUser} />}
/>
<Route
  path="/register"
  element={<Register users={users} setUsers={setUsers} setCurrentUser={setCurrentUser} />}
/>



        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

       <Route
  path="/citizen/dashboard"
  element={<CitizenDashboard currentUser={currentUser} setCurrentUser={setCurrentUser} />}
/>


        <Route
  path="/citizen/report"
  element={
    <ReportIssue
      reports={reports}
      setReports={setReports}
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}
    />
  }
/>

 <Route
  path="/citizen/reports"
  element={<MyReports reports={reports} currentUser={currentUser} setCurrentUser={setCurrentUser} />}
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

<Route
  path="/admin/dashboard"
  element={<AdminDashboard reports={reports} users={users}  />}
/>

<Route
  path="/admin/reports"
  element={<AdminReports reports={reports} users={users} />}
/>

<Route
  path="/admin/users"
  element={<ManageUsers users={users} setUsers={setUsers} />}
/>

<Route
  path="/admin/reports/:id/assign"
  element={
    <AssignReport
      reports={reports}
      setReports={setReports}
      users={users}
      departments={departments}
    />
  }
/>

      </Routes>
    </Router>
  );
}

export default App;