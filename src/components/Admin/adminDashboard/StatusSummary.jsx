import React from "react";

function StatusSummary({ reports }) {
  const statuses = [
    "Pending Review",
    "Assigned",
    "In Progress",
    "Under Review",
    "Resolved",
    "Rejected"
  ];

  const summary = statuses.map((status) => ({
    status: status,
    count: reports.filter((report) => report.status === status).length
  }));

  return (
    <section className="admin-card">
      <div className="admin-card-header">
        <h2>Status Summary</h2>
      </div>

      {summary.map((item) => (
        <div className="status-summary-row" key={item.status}>
          <span>{item.status}</span>
          <strong>{item.count}</strong>
        </div>
      ))}
    </section>
  );
}

export default StatusSummary;