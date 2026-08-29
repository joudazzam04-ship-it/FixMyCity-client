import React from "react";

import pothole from "../../../assets/pothole.jpg";
import streetlight from "../../../assets/streetlight.jpg";
import waterLeak from "../../../assets/waterLeak.jpg";

function ReportInfo({ report }) {
  const images = {
    1: pothole,
    2: streetlight,
    3: waterLeak
  };

  const lastUpdated =
    report.history.length > 0
      ? report.history[report.history.length - 1].date
      : report.reportedDate;

  return (
    <div className="report-info-card">

      {/* Image */}
      <div className="report-info-image">
        <img
          src={images[report.id]}
          alt={report.title}
        />
      </div>

      {/* Middle information */}
      <div className="report-info-details">

        <div className="report-info-row">
          <span className="report-info-label">
            Issue:
          </span>

          <span>{report.title}</span>
        </div>

        <div className="report-info-row">
          <span className="report-info-label">
            Category:
          </span>

          <span>{report.category}</span>
        </div>

        <div className="report-info-row">
          <span className="report-info-label">
            Location:
          </span>

          <span>{report.location}</span>
        </div>

        <div className="report-info-row">
          <span className="report-info-label">
            Date Reported:
          </span>

          <span>{report.reportedDate}</span>
        </div>

        <div className="report-description-section">
          <span className="report-info-label">
            Description:
          </span>

          <p>
            {report.description}
          </p>
        </div>

      </div>

      {/* Right side */}
      <div className="report-info-side">

        <div>
          <span className="report-info-label">
            Status
          </span>

          <div>
            <span
              className={`details-status-badge ${report.status
                .toLowerCase()
                .replaceAll(" ", "-")}`}
            >
              {report.status}
            </span>
          </div>
        </div>

        <div>
          <span className="report-info-label">
            Last Updated
          </span>

          <p>{lastUpdated}</p>
        </div>

      </div>

    </div>
  );
}

export default ReportInfo;