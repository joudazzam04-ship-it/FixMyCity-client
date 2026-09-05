import React from "react";
import UpdateReportCard from "./UpdateReportCard";

function UpdatesList({ reports = [] }) {
  return (
    <section className="updates-list-section">
      {reports.length === 0 && (
        <p>No reports assigned to you yet.</p>
      )}

      {reports.map((report) => (
        <UpdateReportCard
          key={report.id}
          id={report.id}
          image={report.image}
          title={report.title}
          department={report.department}
          location={report.location}
          assignedDate={
            report.assigned_date
              ? new Date(report.assigned_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "Not assigned"
          }
          status={report.status}
        />
      ))}
    </section>
  );
}

export default UpdatesList;