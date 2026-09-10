import React from "react";
import { FiUser, FiChevronDown } from "react-icons/fi";

import "../../../css/adminDashboard/AdminTopbar.css";

function AdminTopbar({ title }) {
    return (
    <header className="admin-topbar">

      <div className="admin-topbar-heading">
        <h1>{title}</h1>
      </div>

   

    </header>
  );
}

export default AdminTopbar;