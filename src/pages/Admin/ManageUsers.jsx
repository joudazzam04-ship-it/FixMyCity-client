import React, { useState, useEffect } from "react";

import AdminSidebar from "../../components/Admin/adminDashboard/AdminSidebar";
import AdminTopbar from "../../components/Admin/adminDashboard/AdminTopbar";

import "../../css/adminDashboard/AdminLayout.css";
import "../../css/adminDashboard/AdminCard.css";
import "../../css/adminReportPage/AdminReport.css";
import "../../css/adminManageUser/AdminManageUser.css";

function ManageUsers({ currentUser, setCurrentUser }) {
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("All Users");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [departments, setDepartments] = useState([]);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newPassword, setNewPassword] = useState("emp123");
  const [newDepartmentId, setNewDepartmentId] = useState("");

  // Fall back to localStorage so the page still works on a direct URL load.
  const savedUser = JSON.parse(localStorage.getItem("user") || "null");
  const user = currentUser || savedUser;


    useEffect(() => {
    fetchUsers();
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    const res = await fetch("http://localhost:5000/api/departments");
    const data = await res.json();
    setDepartments(data);
  };

  const handleCreateEmployee = async () => {
    if (
      newName.trim() === "" ||
      newEmail.trim() === "" ||
      newPassword === "" ||
      newDepartmentId === ""
    ) {
      alert("Please fill in name, email, password and department.");
      return;
    }

    const res = await fetch("http://localhost:5000/api/users/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-role": user.role,
      },
      body: JSON.stringify({
        name: newName.trim(),
        email: newEmail.trim(),
        password: newPassword,
        phone: newPhone.trim(),
        department_id: Number(newDepartmentId),
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    setNewName("");
    setNewEmail("");
    setNewPhone("");
    setNewPassword("emp123");
    setNewDepartmentId("");
    setShowForm(false);

    alert("Employee account created successfully");
    fetchUsers();
  };

  const fetchUsers = async () => {
    if (!user) return;

    const res = await fetch("http://localhost:5000/api/users", {
      headers: { "x-role": user.role },
    });
    const data = await res.json();
    setUsers(data);
  };

  const toggleUserStatus = async (item) => {
    const newStatus = item.status === "Active" ? "Inactive" : "Active";

    await fetch(`http://localhost:5000/api/users/${item.id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-role": user.role,
      },
      body: JSON.stringify({ status: newStatus }),
    });

    fetchUsers();
  };

  const tabs = ["All Users", "Employees", "Citizens"];

  const filteredUsers = users.filter((item) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      (item.name || "").toLowerCase().includes(searchText) ||
      (item.email || "").toLowerCase().includes(searchText) ||
      (item.phone || "").includes(searchText);

    const matchesTab =
      activeTab === "All Users" ||
      (activeTab === "Employees" && item.role === "employee") ||
      (activeTab === "Citizens" && item.role === "citizen");

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesTab && matchesStatus;
  });

  function formatDate(value) {
    if (!value) return "—";
    return new Date(value).toLocaleDateString();
  }

  return (
    <div className="admin-layout">
      <AdminSidebar currentUser={user} setCurrentUser={setCurrentUser} />

      <main className="admin-content">
        <AdminTopbar
          title="Manage Users"
          subtitle="View, search and manage all user accounts in the system."
          currentUser={user}
          setCurrentUser={setCurrentUser}
        />

                <div className="manage-users-actions">
          <button
            type="button"
            className="create-employee-button"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "+ Create Employee Account"}
          </button>
        </div>

        {showForm && (
          <section className="admin-card">
            <div className="admin-card-header">
              <h2>New Employee Account</h2>
            </div>

            <div className="create-employee-grid">

              <div className="create-employee-field">
                <label htmlFor="new-name">Full Name *</label>
                <input
                  id="new-name"
                  type="text"
                  placeholder="Employee full name"
                  value={newName}
                  onChange={(event) => setNewName(event.target.value)}
                />
              </div>

              <div className="create-employee-field">
                <label htmlFor="new-email">Email *</label>
                <input
                  id="new-email"
                  type="email"
                  placeholder="employee@department.gov.jo"
                  value={newEmail}
                  onChange={(event) => setNewEmail(event.target.value)}
                />
              </div>

              <div className="create-employee-field">
                <label htmlFor="new-phone">Phone</label>
                <input
                  id="new-phone"
                  type="tel"
                  placeholder="+962 7 0000 0000"
                  value={newPhone}
                  onChange={(event) => setNewPhone(event.target.value)}
                />
              </div>

              <div className="create-employee-field">
                <label htmlFor="new-department">Department *</label>
                <select
                  id="new-department"
                  value={newDepartmentId}
                  onChange={(event) => setNewDepartmentId(event.target.value)}
                >
                  <option value="">Select department</option>
                  {departments.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="create-employee-field">
                <label htmlFor="new-password">Temporary Password *</label>
                <input
                  id="new-password"
                  type="text"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                />
                <small>Share this with the employee so they can log in.</small>
              </div>

            </div>

            <div className="create-employee-actions">
              <button
                type="button"
                className="admin-table-button"
                onClick={handleCreateEmployee}
              >
                Create Account
              </button>
            </div>
          </section>
        )}

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
                {filteredUsers.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>

                    <td>
                      <span className={`user-role-badge ${item.role}`}>
                        {item.role}
                      </span>
                    </td>

                    <td>{item.department || "—"}</td>

                    <td>
                      <div className="user-contact">
                        <span>{item.email}</span>
                        <span>{item.phone}</span>
                      </div>
                    </td>

                    <td>
                      <span
                        className={`user-status-badge ${(item.status || "").toLowerCase()}`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td>{formatDate(item.joined_on)}</td>

                    <td>
                      <button
                        type="button"
                        className="admin-table-button"
                        onClick={() => toggleUserStatus(item)}
                      >
                        {item.status === "Active" ? "Deactivate" : "Activate"}
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