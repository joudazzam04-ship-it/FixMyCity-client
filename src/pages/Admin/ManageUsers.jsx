import React, { useState } from "react";

import AdminSidebar from "../../components/Admin/adminDashboard/AdminSidebar";
import AdminTopbar from "../../components/Admin/adminDashboard/AdminTopbar";

import "../../css/adminDashboard/AdminLayout.css";
import "../../css/adminDashboard/AdminCard.css";
import "../../css/adminReportPage/AdminReport.css";
import "../../css/adminManageUser/AdminManageUser.css";

function ManageUsers({ users, setUsers }) {
  const [activeTab, setActiveTab] = useState("All Users");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const tabs = ["All Users", "Employees", "Citizens"];

  const filteredUsers = users.filter((user) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText) ||
      user.phone.includes(searchText);

    const matchesTab =
      activeTab === "All Users" ||
      (activeTab === "Employees" && user.role === "employee") ||
      (activeTab === "Citizens" && user.role === "citizen");

    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;

    return matchesSearch && matchesTab && matchesStatus;
  });

  function toggleUserStatus(userId) {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active"
            }
          : user
      )
    );
  }

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-content">
        <AdminTopbar
          title="Manage Users"
          subtitle="View, search and manage all user accounts in the system."
        />

        <div className="manage-users-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`manage-users-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <section className="admin-card admin-filter-bar">
          <input
            type="text"
            className="admin-search-input"
            placeholder="Search by name, email or phone..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <div className="admin-filter-group">
            <label htmlFor="user-status">Status</label>
            <select
              id="user-status"
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <button
            type="button"
            className="admin-reset-button"
            onClick={() => {
              setSearch("");
              setStatusFilter("All");
            }}
          >
            Reset
          </button>
        </section>

        <section className="admin-card">

          {filteredUsers.length === 0 && (
            <p className="admin-empty-message">No users match your filters.</p>
          )}

          {filteredUsers.length > 0 && (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>User Type</th>
                  <th>Department</th>
                  <th>Email / Phone</th>
                  <th>Status</th>
                  <th>Joined On</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>

                    <td>
                      <span className={`user-role-badge ${user.role}`}>
                        {user.role}
                      </span>
                    </td>

                    <td>{user.department || "—"}</td>

                    <td>
                      <div className="user-contact">
                        <span>{user.email}</span>
                        <span>{user.phone}</span>
                      </div>
                    </td>

                    <td>
                      <span
                        className={`user-status-badge ${user.status.toLowerCase()}`}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td>{user.joinedOn}</td>

                    <td>
                      <button
                        type="button"
                        className="admin-table-button"
                        onClick={() => toggleUserStatus(user.id)}
                      >
                        {user.status === "Active" ? "Deactivate" : "Activate"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

        </section>

        <p className="manage-users-note">
          Employees can be assigned to departments and handle reports.
          Citizens can report issues and track their status.
        </p>
      </main>
    </div>
  );
}

export default ManageUsers;