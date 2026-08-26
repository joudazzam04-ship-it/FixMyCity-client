import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink,Link } from "react-router-dom";
import {FiHome,FiFileText,FiPlusCircle,FiUser,} from "react-icons/fi";

import "../../css/citizenDashboard/CitizenNavbar.css";
import logo from "../../assets/logo.png";

export default function CitizenNavbar() {
  return (
    <BootstrapNavbar expand="lg" className="citizen-navbar">
      <Container>
        <BootstrapNavbar.Brand
          as={Link}
          to="/citizen/dashboard"
          className="citizen-brand"
        >
          <img
            src={logo}
            alt="FixMyCity"
            className="citizen-logo"
          />
          FixMyCity
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="citizen-navbar-nav" />

        <BootstrapNavbar.Collapse id="citizen-navbar-nav">
          <Nav className="mx-auto citizen-nav-links">
            <Nav.Link as={NavLink} to="/citizen/dashboard">
              <FiHome />
              Dashboard
            </Nav.Link>

            <Nav.Link as={NavLink} to="/citizen/reports">
              <FiFileText />
              My Reports
            </Nav.Link>

            <Nav.Link as={NavLink} to="/citizen/report">
              <FiPlusCircle />
              Report Issue
            </Nav.Link>
          </Nav>

          <Nav>
            <NavDropdown
              title={
                <span className="user-dropdown-title">
                  <FiUser />
                  Ahmad Omar
                </span>
              }
              id="citizen-user-dropdown"
              align="end"
            >
              <NavDropdown.Item as={Link} to="/citizen/profile">
                Profile
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}