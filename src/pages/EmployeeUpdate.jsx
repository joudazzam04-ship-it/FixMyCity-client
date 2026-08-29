import React from "react";

import EmployeeSidebar from "../components/employeeDashboard/EmployeeSidebar";
import UpdatesList from "../components/employeeUpdate/UpdatesList";

import "../css/employeeUpdate/EmployeeUpdates.css";

function EmployeeUpdates({ reports }) {
  return (
    <div className="employee-updates-layout">
      <EmployeeSidebar />

      <main className="employee-updates-content">
        <div className="employee-updates-heading">
          <h1>Updates</h1>
          <p>View your assigned reports and update their progress.</p>
        </div>

        <UpdatesList reports={reports} />
      </main>
    </div>
  );
}

export default EmployeeUpdates;