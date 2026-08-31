import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiFileText,
  FiSettings,
  FiUser,
  FiLogOut
} from "react-icons/fi";

import logo from "../../../assets/logo.png";
import "../../../css/adminDashboard/AdminSidebar.css";

function AdminSidebar({ currentUser }) {
  return (
    <aside className="admin-sidebar">

      <div className="admin-sidebar-brand">
        <img src={logo} alt="FixMyCity" />
        <h2>FixMyCity</h2>
      </div>

      <nav className="admin-sidebar-nav">

        <NavLink to="/admin/dashboard" className="admin-sidebar-link">
          <FiHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/users" className="admin-sidebar-link">
          <FiUsers />
          <span>Manage Users</span>
        </NavLink>

        <NavLink to="/admin/reports" className="admin-sidebar-link">
          <FiFileText />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/admin/settings" className="admin-sidebar-link">
          <FiSettings />
          <span>Settings</span>
        </NavLink>

      </nav>

      <div className="sidebar-user">
        <FiUser className="sidebar-user-avatar" />

        <div className="sidebar-user-info">
          <span className="sidebar-user-name">
            {currentUser ? currentUser.name : "Guest"}
          </span>
          <span className="sidebar-user-role">Admin</span>
        </div>
      </div>

      <button className="admin-logout">
        <FiLogOut />
        <span>Logout</span>
      </button>

    </aside>
  );
}

export default AdminSidebar;