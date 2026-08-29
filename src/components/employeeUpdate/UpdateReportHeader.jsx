import React from "react";

import pothole from "../../assets/pothole.jpg";

function UpdateReportHeader({ report }) {
  return (
    <div className="update-report-header">

      <img
        src={pothole}
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
          Assigned: {report.assignedDate}
        </p>

      </div>

      <div className="update-header-status">

        <div>
          <span className="header-label">
            Current Status
          </span>

          <span
  className={`current-status ${report.status
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
            Medium
          </span>
        </div>

      </div>

    </div>
  );
}

export default UpdateReportHeader;