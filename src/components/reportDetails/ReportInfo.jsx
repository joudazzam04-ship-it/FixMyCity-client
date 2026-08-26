import React from "react";

function ReportInfo({ report }) {
  return (
    <section className="report-info-card">

      <div className="report-info-image">
        <img
          src={report.image}
          alt={report.title}
        />
      </div>

      <div className="report-info-details">

        <div className="report-info-row">
          <span className="report-info-label">Issue:</span>
          <span>{report.title}</span>
        </div>

        <div className="report-info-row">
          <span className="report-info-label">Category:</span>
          <span>{report.category}</span>
        </div>

        <div className="report-info-row">
          <span className="report-info-label">Location:</span>
          <span>{report.location}</span>
        </div>

        <div className="report-info-row">
          <span className="report-info-label">Date Reported:</span>
          <span>{report.dateReported}</span>
        </div>

        <div className="report-description-section">
          <span className="report-info-label">Description:</span>

          <p>{report.description}</p>
        </div>

      </div>

      <div className="report-info-side">

        <div>
          <span className="report-info-label">
            Status
          </span>

          <div className="details-status-badge">
            {report.status}
          </div>
        </div>

        <div>
          <span className="report-info-label">
            Last Updated
          </span>

          <p>{report.lastUpdated}</p>
        </div>

      </div>

    </section>
  );
}

export default ReportInfo;