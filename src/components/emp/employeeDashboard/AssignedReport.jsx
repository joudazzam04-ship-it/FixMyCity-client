import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMapPin,
  FiCalendar,
  FiGrid
} from "react-icons/fi";

import placeholder from "../../../assets/pothole.jpg";

import "../../../css/employeeDashboard/AssignedReport.css";

function formatDate(value) {
  if (!value) return "Not assigned";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function AssignedReports({ reports = [] }) {
  const navigate = useNavigate();

  const recent = reports.slice(0, 3);

  return (
    <section className="assigned-reports-section">
      <h2>Assigned Reports</h2>

      {recent.length === 0 && (
        <p>No reports assigned to you yet.</p>
      )}

      {recent.map((report) => (
        <div className="assigned-report-card" key={report.id}>

          <img
            src={report.image || placeholder}
            alt={report.title}
            className="assigned-report-image"
          />

          <div className="assigned-report-info">
            <h3>{report.title}</h3>

            <p>
              <FiGrid />
              {report.department || "—"}
            </p>

            <p>
              <FiMapPin />
              {report.location}
            </p>

            <p>
              <FiCalendar />
              Assigned: {formatDate(report.assigned_date)}
            </p>
          </div>

          <div className="assigned-report-action">

            <span
              className={`employee-status-badge ${(report.status || "")
                .toLowerCase()
                .replaceAll(" ", "-")}`}
            >
              {report.status}
            </span>

            <button
              type="button"
              onClick={() => navigate(`/employee/updates/${report.id}`)}
            >
              View Details
            </button>

          </div>

        </div>
      ))}

      <button
        type="button"
        className="view-all-reports-btn"
        onClick={() => navigate("/employee/updates")}
      >
        View All Assigned Reports
      </button>

    </section>
  );
}

export default AssignedReports;