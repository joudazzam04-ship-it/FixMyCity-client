import React, { useState } from "react";
import { Link } from "react-router-dom";

import AdminSidebar from "../../components/Admin/adminDashboard/AdminSidebar";
import AdminTopbar from "../../components/Admin/adminDashboard/AdminTopbar";

import "../../css/adminDashboard/AdminLayout.css";
import "../../css/adminDashboard/AdminCard.css";
import "../../css/adminReportPage/AdminReport.css";

import { FiImage } from "react-icons/fi";

function AdminReports({ reports, users }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const statuses = [
    "All",
    "Pending Review",
    "Assigned",
    "In Progress",
    "Under Review",
    "Resolved",
    "Rejected"
  ];

  const priorities = ["All", "High", "Medium", "Low"];

  const filteredReports = reports.filter((report) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      report.title.toLowerCase().includes(searchText) ||
      report.location.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" || report.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" || report.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  function resetFilters() {
    setSearch("");
    setStatusFilter("All");
    setPriorityFilter("All");
  }

  function getUserName(userId) {
    const user = users.find((item) => item.id === userId);
    return user ? user.name : "Unknown";
  }

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-content">
        <AdminTopbar
          title="Reports"
          subtitle="View and manage all reports submitted by citizens."
        />

        <section className="admin-card admin-filter-bar">

          <input
            type="text"
            className="admin-search-input"
            placeholder="Search by issue or location..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <div className="admin-filter-group">
            <label htmlFor="status-filter">Status</label>
            <select
              id="status-filter"
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-filter-group">
            <label htmlFor="priority-filter">Priority</label>
            <select
              id="priority-filter"
              value={priorityFilter}
              onChange={(event) => setPriorityFilter(event.target.value)}
            >
              {priorities.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className="admin-reset-button"
            onClick={resetFilters}
          >
            Reset
          </button>

        </section>

        <section className="admin-card">

          {filteredReports.length === 0 && (
            <p className="admin-empty-message">
              No reports match your filters.
            </p>
          )}

  {filteredReports.map((report) => (

  <div className="admin-report-row" key={report.id}>

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
        Reported by {getUserName(report.reportedBy)} •{" "}
        {report.reportedDate}
      </p>
    </div>

    <span
      className={`admin-status-badge ${report.status
        .toLowerCase()
        .replaceAll(" ", "-")}`}
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
))}

        </section>
      </main>
    </div>
  );
}

export default AdminReports;