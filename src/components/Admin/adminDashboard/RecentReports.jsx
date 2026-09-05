import React from "react";
import { Link } from "react-router-dom";

function RecentReports({ reports }) {
  const recent = reports.slice(0, 5);

  return (
    <section className="admin-card">

      <div className="admin-card-header">
        <h2>Recent Reports</h2>
        <Link to="/admin/reports">View All</Link>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Issue</th>
            <th>Category</th>
            <th>Location</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {recent.map((report) => (
            <tr key={report.id}>
              <td>{report.title}</td>
              <td>{report.category || "—"}</td>
              <td>{report.location}</td>

              <td>
                <span
                  className={`admin-status-badge ${(report.status || "")
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                >
                  {report.status}
                </span>
              </td>

              <td>{report.assigned_to_name || "—"}</td>

              <td>
                <Link
                  to={`/admin/reports/${report.id}/assign`}
                  className="admin-table-button"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </section>
  );
}

export default RecentReports;