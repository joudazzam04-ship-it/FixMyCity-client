
import React from "react";
import {
  FiClipboard,
  FiLoader,
  FiCheckCircle
} from "react-icons/fi";

import "../../css/EmployeeDashboard/EmployeeStats.css";

function EmployeeStats() {
  return (
    <section className="employee-stats">

      <div className="employee-stat-card">
        <div className="employee-stat-icon">
          <FiClipboard />
        </div>

        <div>
          <p>Assigned Reports</p>
          <h2>12</h2>
        </div>
      </div>

      <div className="employee-stat-card">
        <div className="employee-stat-icon">
          <FiLoader />
        </div>

        <div>
          <p>In Progress</p>
          <h2>5</h2>
        </div>
      </div>

      <div className="employee-stat-card">
        <div className="employee-stat-icon">
          <FiCheckCircle />
        </div>

        <div>
          <p>Resolved</p>
          <h2>7</h2>
        </div>
      </div>

    </section>
  );
}

export default EmployeeStats;