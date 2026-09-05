import React, { useState, useEffect } from "react";

import EmployeeSidebar from "../../components/emp/employeeDashboard/EmployeeSidebar";
import UpdatesList from "../../components/emp/employeeUpdate/UpdatesList";

import "../../css/employeeUpdate/EmployeeUpdates.css";

function EmployeeUpdates({ currentUser, setCurrentUser }) {
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

  const myReports = reports
    .filter((report) => user && report.assigned_to === user.id)
    .sort((a, b) => new Date(b.assigned_date) - new Date(a.assigned_date));

  return (
    <div className="employee-updates-layout">
      <EmployeeSidebar currentUser={user} setCurrentUser={setCurrentUser} />

      <main className="employee-updates-content">
        <div className="employee-updates-heading">
          <h1>Updates</h1>
          <p>View your assigned reports and update their progress.</p>
        </div>

        <UpdatesList reports={myReports} />
      </main>
    </div>
  );
}

export default EmployeeUpdates;