import React from "react";
import { FiUser, FiChevronDown } from "react-icons/fi";

import "../../../css/adminDashboard/AdminTopbar.css";

function AdminTopbar({ title, subtitle }) {
  return (
    <header className="admin-topbar">

      <div className="admin-topbar-heading">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>

      <div className="admin-topbar-user">
        <FiUser className="admin-topbar-avatar" />

        <div className="admin-topbar-user-info">
          <span className="admin-topbar-name">Admin User</span>
          <span className="admin-topbar-role">Super Admin</span>
        </div>

        <FiChevronDown />
      </div>

    </header>
  );
}

export default AdminTopbar;