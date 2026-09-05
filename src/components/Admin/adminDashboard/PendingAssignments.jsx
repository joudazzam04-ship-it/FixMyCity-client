import React from "react";
import { Link } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";

function PendingAssignments({ reports }) {
  const pending = reports.filter(
    (report) => report.assigned_to === null && report.status !== "Rejected"
  );

  function formatDate(value) {
    if (!value) return "—";
    return new Date(value).toLocaleDateString();
  }

  return (
    <section className="admin-card">

      <div className="admin-card-header">
        <h2>Pending Assignments</h2>
        <Link to="/admin/reports">View All</Link>
      </div>

      {pending.length === 0 && (
        <p className="admin-empty-message">
          No reports are waiting for assignment.
        </p>
      )}

      {pending.map((report) => (
        <div className="pending-assignment-row" key={report.id}>

          <div className="pending-assignment-info">
            <FiAlertTriangle className="pending-assignment-icon" />

            <div>
              <h4>{report.title}</h4>
              <p>{report.location}</p>
            </div>
          </div>

          <span className="pending-assignment-status">Unassigned</span>

          <span className="pending-assignment-date">
            {formatDate(report.reported_date)}
          </span>

          <Link
            to={`/admin/reports/${report.id}/assign`}
            className="admin-table-button"
          >
            Assign
          </Link>

        </div>
      ))}

    </section>
  );
}

export default PendingAssignments;