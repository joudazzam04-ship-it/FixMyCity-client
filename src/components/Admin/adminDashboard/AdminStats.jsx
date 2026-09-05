import React from "react";

import {
  FiFileText,
  FiClock,
  FiUsers,
  FiCheckCircle,
  FiUser
} from "react-icons/fi";

function AdminStats({ reports, users }) {
  const stats = [
    {
      label: "Total Reports",
      value: reports.length,
      icon: <FiFileText />
    },
    {
      label: "Pending Review",
      value: reports.filter((report) => report.status === "Pending Review").length,
      icon: <FiClock />
    },
    {
      label: "Assigned Reports",
      value: reports.filter((report) => report.assigned_to !== null).length,
      icon: <FiUsers />
    },
    {
      label: "Resolved Reports",
      value: reports.filter((report) => report.status === "Resolved").length,
      icon: <FiCheckCircle />
    },
    {
      label: "Citizens",
      value: users.filter((user) => user.role === "citizen").length,
      icon: <FiUser />
    }
  ];

  return (
    <div className="admin-stats">
      {stats.map((stat) => (
        <div className="admin-stat-card" key={stat.label}>
          <div className="admin-stat-icon">{stat.icon}</div>
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminStats;