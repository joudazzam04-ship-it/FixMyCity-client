import React from "react";
import { Link } from "react-router-dom";
import { FiFileText, FiUserPlus, FiUsers, FiChevronRight } from "react-icons/fi";

function QuickAccess() {
  const actions = [
    { label: "Assign Report", to: "/admin/reports", icon: <FiFileText /> },
    { label: "Add User", to: "/admin/users", icon: <FiUserPlus /> },
    { label: "Manage Citizens", to: "/admin/users", icon: <FiUsers /> }
  ];

  return (
    <section className="admin-card">
      <div className="admin-card-header">
        <h2>Quick Access</h2>
      </div>

      {actions.map((action) => (
        <Link to={action.to} className="quick-action-row" key={action.label}>
          <span className="quick-action-icon">{action.icon}</span>
          <span className="quick-action-label">{action.label}</span>
          <FiChevronRight />
        </Link>
      ))}
    </section>
  );
}

export default QuickAccess;