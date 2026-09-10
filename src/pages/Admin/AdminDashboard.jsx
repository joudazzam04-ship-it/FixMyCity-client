import React, { useState, useEffect } from "react";

import AdminSidebar from "../../components/Admin/adminDashboard/AdminSidebar";
import AdminTopbar from "../../components/Admin/adminDashboard/AdminTopbar";
import AdminStats from "../../components/Admin/adminDashboard/AdminStats";
import RecentReports from "../../components/Admin/adminDashboard/RecentReports";
import PendingAssignments from "../../components/Admin/adminDashboard/PendingAssignments";
import QuickAccess from "../../components/Admin/adminDashboard/QuickAccess";
import StatusSummary from "../../components/Admin/adminDashboard/StatusSummary";
import "../../css/adminDashboard/adminLayout.css";
import "../../css/adminDashboard/AdminStats.css";
import "../../css/adminDashboard/AdminCard.css";

function AdminDashboard({ currentUser, setCurrentUser }) {
  const [reports, setReports] = useState([]);
  const [users, setUsers] = useState([]);

  const savedUser = JSON.parse(localStorage.getItem("user") || "null");
  const user = currentUser || savedUser;

  useEffect(() => {
    fetchReports();
    fetchUsers();
  }, []);

  const fetchReports = async () => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/reports`);
    const data = await res.json();
    setReports(data);
  };

  const fetchUsers = async () => {
    if (!user) return;

    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users`, {
      headers: { "x-role": user.role }, 
// add header to request to indicate the role of the user making the request. 

    });
    const data = await res.json();
    setUsers(data);
  };

  return (
    <div className="admin-layout">
      <AdminSidebar currentUser={user} setCurrentUser={setCurrentUser} />

      <main className="admin-content">
        <AdminTopbar
          title="Admin Dashboard"
        />


        {/* passing props from the parent AdminDashboard to the child AdminStats component. The reports and users state variables are passed as props to the AdminStats component */}
        <AdminStats reports={reports} users={users} />

        <div className="admin-dashboard-columns">
          <div>
            <RecentReports reports={reports} />
            <PendingAssignments reports={reports} />
          </div>

          <div>
            <QuickAccess />
            <StatusSummary reports={reports} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;