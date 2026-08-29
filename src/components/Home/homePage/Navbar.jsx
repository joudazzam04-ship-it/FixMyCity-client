import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar  from "react-bootstrap/Navbar";

import "../../../css/home/Navbar.css";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

function Navbar(){
return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <img
            src={logo} 
            alt="FixMyCity" 
          />
          FixMyCity
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="home-navbar" />

        <BootstrapNavbar.Collapse id="home-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>

            <Nav.Link as={NavLink} to="/about">
  About
</Nav.Link>

            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
);
}
export default Navbar;