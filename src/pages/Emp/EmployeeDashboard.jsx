
import React from "react";
import EmployeeSidebar from "../../components/emp/employeeDashboard/EmployeeSidebar.jsx";
import EmployeeStats from "../../components/emp/employeeDashboard/EmployeeStats.jsx";
import AssignedReports from "../../components/emp/employeeDashboard/AssignedReport.jsx";
import QuickAccess from "../../components/emp/employeeDashboard/QuickAccess.jsx";

import "../../css/employeeDashboard/EmployeeDashboard.css";

function EmployeeDashboard({ reports }) {
  return (
    <div className="employee-dashboard-layout">
      <EmployeeSidebar />

      <main className="employee-dashboard-content">
        <h1>Employee Dashboard</h1>
        <p>View assigned reports and update their progress.</p>

        <EmployeeStats />

        <div className="employee-dashboard-main">
<AssignedReports reports={reports} />
          <QuickAccess />
        </div>
      </main>
    </div>
  );
}

export default EmployeeDashboard;


