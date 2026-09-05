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

   

    </header>
  );
}

export default AdminTopbar;