import React from "react";
import {
  FiHome,
  FiMessageSquare,
  FiUser,
  FiLogOut
} from "react-icons/fi";

import logo from "../../../assets/logo.png";
import "../../../css/EmployeeDashboard/EmployeeSidebar.css";


import { NavLink, useNavigate } from "react-router-dom";

function EmployeeSidebar({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  function handleLogout() {
    setCurrentUser(null);
    navigate("/login");
  }
    return (
    <aside className="employee-sidebar">

      <div className="employee-sidebar-brand">
        <img src={logo} alt="FixMyCity" />
        <h2>FixMyCity</h2>
      </div>

      <nav className="employee-sidebar-nav">

        <NavLink
          to="/employee/dashboard"
          className="employee-sidebar-link"
        >
          <FiHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/employee/updates"
          className="employee-sidebar-link"
        >
          <FiMessageSquare />
          <span>Updates</span>
        </NavLink>

        <NavLink
          to="/employee/profile"
          className="employee-sidebar-link"
        >
          <FiUser />
          <span>Profile</span>
        </NavLink>

      </nav>

     <button className="employee-logout" onClick={handleLogout}>
  <FiLogOut />
  <span>Logout</span>
</button>

    </aside>
  );
}

export default EmployeeSidebar;