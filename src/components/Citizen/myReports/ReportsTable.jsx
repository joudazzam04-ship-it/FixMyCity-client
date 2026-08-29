import React from "react";

import ReportRow from "./ReportRow";

import pothole from "../../../assets/pothole.jpg";
import streetlight from "../../../assets/streetlight.jpg";
import waterLeak from "../../../assets/waterLeak.jpg";

function ReportsTable({ reports }) {
  const images = {
    1: pothole,
    2: streetlight,
    3: waterLeak
  };

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
          image={images[report.id]}
          title={report.title}
          location={report.location}
          status={report.status}
          date={report.reportedDate}
        />
      ))}

    </div>
  );
}

export default ReportsTable;