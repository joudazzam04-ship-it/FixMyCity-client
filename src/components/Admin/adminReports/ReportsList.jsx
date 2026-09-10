import React from "react";

import ReportRow from "./ReportRow";

function ReportsList({ reports }) {

  if (reports.length === 0) {
    return (
      <section className="admin-card">
        <p className="admin-empty-message">
          No reports match your filters.
        </p>
      </section>
    );
  }

  return (
    <section className="admin-card">

      {reports.map((report) => (
        <ReportRow
          key={report.id}
          report={report}
        />
      ))}

    </section>
  );
}

export default ReportsList;