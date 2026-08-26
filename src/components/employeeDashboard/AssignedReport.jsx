
import React from "react";
import {
  FiMapPin,
  FiCalendar,
  FiGrid
} from "react-icons/fi";

import pothole from "../../assets/pothole.jpg";
import streetlight from "../../assets/streetlight.jpg";
import waterLeak from "../../assets/waterLeak.jpg";

import "../../css/employeeDashboard/AssignedReport.css";
function AssignedReports() {
  return (
    <section className="assigned-reports-section">
      <h2>Assigned Reports</h2>

      <div className="assigned-report-card">
        <img
          src={pothole}
          alt="Pothole"
          className="assigned-report-image"
        />

        <div className="assigned-report-info">
          <h3>Pothole on Main Street</h3>

          <p>
            <FiGrid />
            Road Maintenance
          </p>

          <p>
            <FiMapPin />
            Main St, Downtown
          </p>

          <p>
            <FiCalendar />
            Assigned: May 12, 2026
          </p>
        </div>

        <div className="assigned-report-action">
          <span className="employee-status-badge in-progress">
            In Progress
          </span>

          <button>
            View Details
          </button>
        </div>
      </div>

      <div className="assigned-report-card">
        <img
          src={streetlight}
          alt="Streetlight"
          className="assigned-report-image"
        />

        <div className="assigned-report-info">
          <h3>Broken Streetlight</h3>

          <p>
            <FiGrid />
            Street Lighting
          </p>

          <p>
            <FiMapPin />
            Oak Ave, Block 12
          </p>

          <p>
            <FiCalendar />
            Assigned: May 10, 2026
          </p>
        </div>

        <div className="assigned-report-action">
          <span className="employee-status-badge assigned">
            Assigned
          </span>

          <button>
            View Details
          </button>
        </div>
      </div>

      <div className="assigned-report-card">
        <img
          src={waterLeak}
          alt="Water Leak"
          className="assigned-report-image"
        />

        <div className="assigned-report-info">
          <h3>Water Leak Near Sidewalk</h3>

          <p>
            <FiGrid />
            Water & Sewer
          </p>

          <p>
            <FiMapPin />
            Pine Rd, Near #45
          </p>

          <p>
            <FiCalendar />
            Assigned: May 9, 2026
          </p>
        </div>

        <div className="assigned-report-action">
          <span className="employee-status-badge in-progress">
            In Progress
          </span>

          <button>
            View Details
          </button>
        </div>
      </div>

      <button className="view-all-reports-btn">
        View All Assigned Reports
      </button>
    </section>
  );
}

export default AssignedReports;