import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiFileText,
  FiUser,
  FiLogOut
} from "react-icons/fi";

import logo from "../../../assets/logo.png";
import "../../../css/adminDashboard/AdminSidebar.css";

function AdminSidebar({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
    navigate("/login");
  };

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

       

      </nav>

      <div className="sidebar-user">
        <FiUser className="sidebar-user-avatar" />

        <div className="sidebar-user-info">
          <span className="sidebar-user-name">
            {currentUser ? currentUser.name : "Guest"}
          </span>
          <span className="sidebar-user-role">
            {currentUser ? currentUser.role : ""}
          </span>
        </div>
      </div>

      <button className="admin-logout" onClick={handleLogout}>
        <FiLogOut />
        <span>Logout</span>
      </button>

    </aside>
  );
}

export default AdminSidebar;