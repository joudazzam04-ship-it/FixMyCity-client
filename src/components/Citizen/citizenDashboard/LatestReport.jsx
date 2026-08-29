import React from "react";
import { FiMapPin } from "react-icons/fi";
import "../../../css/citizenDashboard/LatestReport.css";
import pothole from "../../../assets/pothole.jpg";

function LatestReport() {
  return (
    <section className="latest-report-section">
      <h3 className="latest-report-title">Latest Report</h3>

      <div className="latest-report-card">
        <div className="latest-report-image">
          <img src={pothole} alt="Pothole report" />
        </div>

        <div className="latest-report-info">
          <h4>Pothole on Main St.</h4>

          <p className="report-location">
            <FiMapPin />
            Khalda, Amman
          </p>

          <p className="report-description">
            Large pothole causing problems for cars.
          </p>
        </div>

        <div className="latest-report-divider"></div>

        <div className="latest-report-status">
          <span>Status</span>
          <p className="status-badge">In Progress</p>
        </div>

        <div className="latest-report-date">
          <span>Reported On</span>
          <p>May 18, 2026</p>
        </div>

        <div className="latest-report-action">
          <button>View Details</button>
        </div>
      </div>
    </section>
  );
}

export default LatestReport;