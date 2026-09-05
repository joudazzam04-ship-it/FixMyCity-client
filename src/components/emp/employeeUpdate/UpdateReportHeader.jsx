import React from "react";

import pothole from "../../../assets/pothole.jpg";

function formatDate(value) {
  if (!value) return "Not assigned";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function UpdateReportHeader({ report }) {
  return (
    <div className="update-report-header">

      <img
        src={report.image || pothole}
        alt={report.title}
        className="update-header-image"
      />

      <div className="update-header-info">

        <h2>{report.title}</h2>

        <p className="update-report-id">
          Report ID: REP-{report.id}
        </p>

        <p>
          Location: {report.location}
        </p>

        <p>
          Assigned: {formatDate(report.assigned_date)}
        </p>

        {report.admin_note && (
          <div className="update-admin-note">
            <span className="header-label">Admin Note</span>
            <p>{report.admin_note}</p>
          </div>
        )}

      </div>

      <div className="update-header-status">

        <div>
          <span className="header-label">
            Current Status
          </span>

          <span
            className={`current-status ${(report.status || "")
              .toLowerCase()
              .replaceAll(" ", "-")}`}
          >
            {report.status}
          </span>
        </div>

        <div>
          <span className="header-label">
            Priority
          </span>

          <span className="priority-status">
            {report.priority || "—"}
          </span>
        </div>

      </div>

    </div>
  );
}

export default UpdateReportHeader;