import React, { useState, useEffect } from "react";

import AdminSidebar from "../../components/Admin/adminDashboard/AdminSidebar";
import AdminTopbar from "../../components/Admin/adminDashboard/AdminTopbar";

import ReportFilters from "../../components/Admin/adminReports/ReportFilters";
import ReportsList from "../../components/Admin/adminReports/ReportsList";

import "../../css/adminDashboard/adminLayout.css";
import "../../css/adminDashboard/AdminCard.css";
import "../../css/adminReportPage/AdminReport.css";

function AdminReports({ currentUser, setCurrentUser }) {
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const savedUser = JSON.parse(
    localStorage.getItem("user") || "null"
  );
 
  const user = currentUser || savedUser;

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/reports`
    );

    const data = await res.json();

    setReports(data);
  };

  const filteredReports = reports.filter((report) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      (report.title || "")
        .toLowerCase()
        .includes(searchText) ||
      (report.location || "")
        .toLowerCase()
        .includes(searchText);

    const matchesStatus =
      statusFilter === "All" ||
      report.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" ||
      report.priority === priorityFilter;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPriority
    );
  });

  const resetFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setPriorityFilter("All");
  };

  return (
    <div className="admin-layout">

      <AdminSidebar
        currentUser={user}
        setCurrentUser={setCurrentUser}
      />

      <main className="admin-content">

        <AdminTopbar
          title="Reports"
          subtitle="View and manage all reports submitted by citizens."
          currentUser={user}
        />

        <ReportFilters
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          onReset={resetFilters}
        />

        <ReportsList reports={filteredReports} />

      </main>

    </div>
  );
}

export default AdminReports;