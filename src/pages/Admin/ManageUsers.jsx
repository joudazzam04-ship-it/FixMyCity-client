import React, { useState, useEffect } from "react";

import AdminSidebar from "../../components/Admin/adminDashboard/AdminSidebar";
import AdminTopbar from "../../components/Admin/adminDashboard/AdminTopbar";

import CreateEmployeeForm from "../../components/Admin/manageUsers/CreateEmployeeForm";
import ManageUserTabs from "../../components/Admin/manageUsers/ManageUserTabs";
import UserFilters from "../../components/Admin/manageUsers/UserFilters";
import UsersTable from "../../components/Admin/manageUsers/UsersTable";

import "../../css/adminDashboard/adminLayout.css";
import "../../css/adminDashboard/AdminCard.css";
import "../../css/adminReportPage/AdminReport.css";
import "../../css/adminManageUser/AdminManageUser.css";

function ManageUsers({ currentUser, setCurrentUser }) {

  const [users, setUsers] = useState([]);

  const [activeTab, setActiveTab] = useState("All Users");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showForm, setShowForm] = useState(false);

  const savedUser = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  const user = currentUser || savedUser;


  useEffect(() => {
    fetchUsers();
  }, []);


  const fetchUsers = async () => {

    if (!user) return;

    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/users`,
      {
        headers: {
          "x-role": user.role
        }
      }
    );

    const data = await res.json();

    setUsers(data);
  };

// item = one user 
  const toggleUserStatus = async (item) => {

    const newStatus = item.status === "Active" ? "Inactive" : "Active";

    await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/users/${item.id}/status`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", //The body I'm sending is JSON.
          "x-role": user.role 
        },

        // the actual data being sent to the backend.
        body: JSON.stringify({
          status: newStatus
        })
      }
    );

    fetchUsers();
  };

// filteredUsers array that contains only the users matching the current search, tab, and status filter.
  const filteredUsers = users.filter((item) => {

    const searchText = search.toLowerCase();

    const matchesSearch =
      (item.name || "")
        .toLowerCase()
        .includes(searchText) ||

      (item.email || "")
        .toLowerCase()
        .includes(searchText) ||

      (item.phone || "")
        .includes(searchText);


    const matchesTab =
      activeTab === "All Users" ||

      (activeTab === "Employees" &&
        item.role === "employee") ||

      (activeTab === "Citizens" &&
        item.role === "citizen");


    const matchesStatus =
      statusFilter === "All" ||
      item.status === statusFilter;


    return (
      matchesSearch &&
      matchesTab &&
      matchesStatus
    );
  });


  return (

    <div className="admin-layout">

      <AdminSidebar
        currentUser={user}
        setCurrentUser={setCurrentUser}
      />


      <main className="admin-content">

        <AdminTopbar
          title="Manage Users"
          subtitle="View, search and manage all user accounts in the system."
          currentUser={user}
        />


        <div className="manage-users-actions">

          <button
            type="button"
            className="create-employee-button"
            onClick={() =>
              setShowForm(!showForm)
            }
          >

            {showForm ? "Cancel" : "+ Create Employee Account"}

          </button>

        </div>


        {showForm && (

          <CreateEmployeeForm
            currentUser={user}
            onCreated={fetchUsers} // Callback to refresh the user list after creating a new employee
            onCancel={() =>
              setShowForm(false)
            }
          />

        )}


        <ManageUserTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />


        <UserFilters
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />


        <UsersTable
          users={filteredUsers}
          onToggleStatus={toggleUserStatus}
        />


        <p className="manage-users-note">
          Employees can be assigned to departments and handle reports.
          Citizens can report issues and track their status.
        </p>

      </main>

    </div>
  );
}

export default ManageUsers;