import React, { useState, useEffect } from "react";

import EmployeeSidebar from "../../components/emp/employeeDashboard/EmployeeSidebar.jsx";
import EmployeeStats from "../../components/emp/employeeDashboard/EmployeeStats.jsx";
import AssignedReports from "../../components/emp/employeeDashboard/AssignedReport.jsx";
import QuickAccess from "../../components/emp/employeeDashboard/QuickAccess.jsx";

import "../../css/employeeDashboard/EmployeeDashboard.css";

function EmployeeDashboard({ currentUser, setCurrentUser }) {
  const [reports, setReports] = useState([]);

  const savedUser = JSON.parse(localStorage.getItem("user") || "null");
  const user = currentUser || savedUser;

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    const res = await fetch("http://localhost:5000/api/reports");
    const data = await res.json();
    setReports(data);
  };

  // Only the reports assigned to this employee, newest assignment first.
  const myReports = reports
    .filter((report) => user && report.assigned_to === user.id)
    .sort((a, b) => new Date(b.assigned_date) - new Date(a.assigned_date));

  return (
    <div className="employee-dashboard-layout">
      <EmployeeSidebar currentUser={user} setCurrentUser={setCurrentUser} />

      <main className="employee-dashboard-content">
        <h1>Employee Dashboard</h1>
        <p>View assigned reports and update their progress.</p>

        <EmployeeStats reports={myReports} />

        <div className="employee-dashboard-main">
          <AssignedReports reports={myReports} />
          <QuickAccess />
        </div>
      </main>
    </div>
  );
}

export default EmployeeDashboard;