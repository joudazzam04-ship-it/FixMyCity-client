import React from "react";
import AdminSidebar from "../../components/Admin/adminDashboard/AdminSidebar";
import AdminTopbar from "../../components/Admin/adminDashboard/AdminTopbar";
import AdminStats from "../../components/Admin/adminDashboard/AdminStats";
import RecentReports from "../../components/Admin/adminDashboard/RecentReports";
import PendingAssignments from "../../components/Admin/adminDashboard/PendingAssignments";
import QuickAccess from "../../components/Admin/adminDashboard/QuickAccess";
import StatusSummary from "../../components/Admin/adminDashboard/StatusSummary";

import "../../css/adminDashboard/AdminLayout.css";
import "../../css/adminDashboard/AdminStats.css";
import "../../css/adminDashboard/AdminCard.css";

function AdminDashboard({ reports, users }) {
  return (
    <div className="admin-layout">
      <AdminSidebar />

    <main className="admin-content">
  <AdminTopbar title="Admin Dashboard" />
  <AdminStats reports={reports} users={users} />

  <div className="admin-dashboard-columns">
    <div>
      <RecentReports reports={reports} users={users} />
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