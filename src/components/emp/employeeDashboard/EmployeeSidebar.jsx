import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiMessageSquare,
  FiUser,
  FiLogOut
} from "react-icons/fi";

import logo from "../../../assets/logo.png";
import "../../../css/EmployeeDashboard/EmployeeSidebar.css";

function EmployeeSidebar({ currentUser }) {
  return (
    <aside className="employee-sidebar">

      <div className="employee-sidebar-brand">
        <img src={logo} alt="FixMyCity" />
        <h2>FixMyCity</h2>
      </div>

      <nav className="employee-sidebar-nav">

        <NavLink to="/employee/dashboard" className="employee-sidebar-link">
          <FiHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/employee/updates" className="employee-sidebar-link">
          <FiMessageSquare />
          <span>Updates</span>
        </NavLink>

        <NavLink to="/employee/profile" className="employee-sidebar-link">
          <FiUser />
          <span>Profile</span>
        </NavLink>

      </nav>

      <div className="employee-sidebar-user">
        <FiUser className="employee-sidebar-user-avatar" />

        <div className="employee-sidebar-user-info">
          <span className="employee-sidebar-user-name">
            {currentUser ? currentUser.name : "Guest"}
          </span>
          <span className="employee-sidebar-user-role">
            {currentUser ? currentUser.department : "Employee"}
          </span>
        </div>
      </div>

      <button className="employee-logout">
        <FiLogOut />
        <span>Logout</span>
      </button>

    </aside>
  );
}

export default EmployeeSidebar;