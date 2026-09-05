import React from "react";
import { FiFileText, FiClock, FiCheckCircle } from "react-icons/fi";
import "../../../css/citizenDashboard/DashboardStats.css";

function DashboardStats({ reports = [] }) {
  const total = reports.length;

  const inProgress = reports.filter(
    (report) => report.status === "In Progress"
  ).length;

  const resolved = reports.filter(
    (report) => report.status === "Resolved"
  ).length;

  return (
    <section className="dashboard-stats">
      <div className="stat-card">
        <div className="stat-icon">
          <FiFileText />
        </div>

        <div className="stat-info">
          <h2>{total}</h2>
          <p>Total Reports</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <FiClock />
        </div>

        <div className="stat-info">
          <h2>{inProgress}</h2>
          <p>In Progress</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <FiCheckCircle />
        </div>

        <div className="stat-info">
          <h2>{resolved}</h2>
          <p>Resolved</p>
        </div>
      </div>
    </section>
  );
}

export default DashboardStats;