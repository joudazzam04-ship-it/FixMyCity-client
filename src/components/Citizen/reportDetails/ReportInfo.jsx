import React from "react";

import placeholder from "../../../assets/pothole.jpg";

// "2026-09-03T09:57:57.378Z" -> "Sep 3, 2026"
function formatDate(value) {
  if (!value) return "—";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function ReportInfo({ report }) {
  const history = report.history || [];

  // The API returns history oldest-first, so the last entry is the newest.
  const lastUpdated =
    history.length > 0
      ? history[history.length - 1].changed_at
      : report.reported_date;

  return (
    <div className="report-info-card">

      {/* Image */}
      <div className="report-info-image">
        <img
          src={report.image || placeholder}
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

          <span>{formatDate(report.reported_date)}</span>
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

          <p>{formatDate(lastUpdated)}</p>
        </div>

      </div>

    </div>
  );
}

export default ReportInfo;