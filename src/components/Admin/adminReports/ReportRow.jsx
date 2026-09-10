import React from "react";
import { Link } from "react-router-dom";
import { FiImage } from "react-icons/fi";

function ReportRow({ report }) {

  function formatDate(value) {
    if (!value) return "—";

    return new Date(value).toLocaleDateString();
  }

  return (
    <div className="admin-report-row">

      {report.image ? (

        <img
          src={report.image}
          alt={report.title}
          className="admin-report-image"
        />

      ) : (

        <div className="admin-report-image admin-report-image-empty">
          <FiImage />
        </div>

      )}

      <div className="admin-report-main">

        <h4>{report.title}</h4>

        <p>{report.location}</p>

        <p>
          Reported by{" "}
          {report.reported_by_name || "Unknown"}
          {" • "}
          {formatDate(report.reported_date)}
        </p>

      </div>

      <span
        className={`admin-status-badge ${
          (report.status || "")
            .toLowerCase()
            .replaceAll(" ", "-")
        }`}
      >
        {report.status}
      </span>

      <span className="admin-report-priority">
        {report.priority || "—"}
      </span>

      <Link
        to={`/admin/reports/${report.id}/assign`}
        className="admin-table-button"
      >
        View Details
      </Link>

    </div>
  );
}

export default ReportRow;