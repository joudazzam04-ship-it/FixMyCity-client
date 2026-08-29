import React from "react";
import {
  FiMapPin,
  FiCalendar,
  FiGrid
} from "react-icons/fi";

import pothole from "../../../assets/pothole.jpg";
import streetlight from "../../../assets/streetlight.jpg";
import waterLeak from "../../../assets/waterLeak.jpg";

import "../../../css/employeeDashboard/AssignedReport.css";

function AssignedReports({ reports }) {
  const images = {
    1: pothole,
    2: streetlight,
    3: waterLeak
  };

  return (
    <section className="assigned-reports-section">
      <h2>Assigned Reports</h2>

      {reports.map((report) => (
        <div className="assigned-report-card" key={report.id}>

          <img
            src={images[report.id]}
            alt={report.title}
            className="assigned-report-image"
          />

          <div className="assigned-report-info">
            <h3>{report.title}</h3>

            <p>
              <FiGrid />
              {report.department}
            </p>

            <p>
              <FiMapPin />
              {report.location}
            </p>

            <p>
              <FiCalendar />
              Assigned: {report.assignedDate}
            </p>
          </div>

          <div className="assigned-report-action">

            <span
              className={`employee-status-badge ${report.status
                .toLowerCase()
                .replaceAll(" ", "-")}`}
            >
              {report.status}
            </span>

            <button>
              View Details
            </button>

          </div>

        </div>
      ))}

      <button className="view-all-reports-btn">
        View All Assigned Reports
      </button>

    </section>
  );
}

export default AssignedReports;