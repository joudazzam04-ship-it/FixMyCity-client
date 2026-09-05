import React from "react";
import { FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "../../../css/citizenDashboard/LatestReport.css";
import placeholder from "../../../assets/pothole.jpg";

function LatestReport({ reports = [] }) {
  const navigate = useNavigate();

  const sorted = [...reports].sort(
    (a, b) => new Date(b.reported_date) - new Date(a.reported_date)
  );
  const latest = sorted[0];

  if (!latest) {
    return (
      <section className="latest-report-section">
        <h3 className="latest-report-title">Latest Report</h3>
        <p>You haven't reported any issues yet.</p>
      </section>
    );
  }

  const reportedOn = new Date(latest.reported_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="latest-report-section">
      <h3 className="latest-report-title">Latest Report</h3>

      <div className="latest-report-card">
        <div className="latest-report-image">
          <img src={latest.image || placeholder} alt={latest.title} />
        </div>

        <div className="latest-report-info">
          <h4>{latest.title}</h4>

          <p className="report-location">
            <FiMapPin />
            {latest.location}
          </p>

          <p className="report-description">{latest.description}</p>
        </div>

        <div className="latest-report-divider"></div>

        <div className="latest-report-status">
          <span>Status</span>
          <p
            className={`status-badge ${(latest.status || "")
              .toLowerCase()
              .replaceAll(" ", "-")}`}
          >
            {latest.status}
          </p>
                  </div>

        <div className="latest-report-date">
          <span>Reported On</span>
          <p>{reportedOn}</p>
        </div>

        <div className="latest-report-action">
          <button onClick={() => navigate(`/citizen/reports/${latest.id}`)}>
            View Details
          </button>
        </div>
      </div>
    </section>
  );
}

export default LatestReport;