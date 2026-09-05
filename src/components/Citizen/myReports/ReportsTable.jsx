import React from "react";

import ReportRow from "./ReportRow";

function ReportsTable({ reports = [] }) {
  if (reports.length === 0) {
    return (
      <div className="reports-table">
        <p style={{ padding: "24px" }}>
          You haven't reported any issues yet.
        </p>
      </div>
    );
  }

  return (
    <div className="reports-table">

      <div className="reports-table-header">
        <span>Issue</span>
        <span>Status</span>
        <span>Reported On</span>
        <span>Action</span>
      </div>

      {reports.map((report) => (
        <ReportRow
          key={report.id}
          id={report.id}
          image={report.image}
          title={report.title}
          location={report.location}
          status={report.status}
          date={new Date(report.reported_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        />
      ))}

    </div>
  );
}

export default ReportsTable;