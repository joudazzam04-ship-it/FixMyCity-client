import React from "react";
import { FiUser, FiChevronDown } from "react-icons/fi";

import "../../../css/adminDashboard/AdminTopbar.css";

function AdminTopbar({ title, subtitle, currentUser }) {
    return (
    <header className="admin-topbar">

      <div className="admin-topbar-heading">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>

      <div className="admin-topbar-user">
        <FiUser className="admin-topbar-avatar" />

        <div className="admin-topbar-user-info">
   <span className="admin-topbar-name">
  {currentUser ? currentUser.name : "Guest"}
</span>
<span className="admin-topbar-role">
  {currentUser ? currentUser.role : ""}
</span>
        </div>

        <FiChevronDown />
      </div>

    </header>
  );
}

export default AdminTopbar;