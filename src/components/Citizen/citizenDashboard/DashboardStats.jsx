import React from "react";
import { FiFileText, FiClock, FiCheckCircle } from "react-icons/fi";
import "../../../css/citizenDashboard/DashboardStats.css";

function DashboardStats() {
  return (
    <section className="dashboard-stats">
      <div className="stat-card">
        <div className="stat-icon">
          <FiFileText />
        </div>

        <div className="stat-info">
          <h2>8</h2>
          <p>Total Reports</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <FiClock />
        </div>

        <div className="stat-info">
          <h2>2</h2>
          <p>In Progress</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <FiCheckCircle />
        </div>

        <div className="stat-info">
          <h2>5</h2>
          <p>Resolved</p>
        </div>
      </div>
    </section>
  );
};

export default DashboardStats;