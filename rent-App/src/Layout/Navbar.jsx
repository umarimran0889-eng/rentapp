
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import Logo from "../assets/Vector (2).png";

import { useTheme } from "../ThemeContext"

import {
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

function NavbarRent() {
  const [user, setUser] = useState(null);
  
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loggedUser = localStorage.getItem("username");

    if (loggedUser) {
      setUser(loggedUser);
    } else {
      setUser(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    setUser(null);
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={Logo} alt="Car Rental logo" />
          Car Rental
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/vehicles"><strong>Vehicles</strong></Nav.Link>
            <Nav.Link as={NavLink} to="/Detailpage/1">Details</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
            {!user && (
              <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            )}
          </Nav>

          <Nav className="ms-auto align-items-center gap-3">
            {user && (
              <>
                <span className="fw-bold">Welcome, {user}</span>
                <Button variant="danger" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}

            <Button 
              variant={theme === 'light' ? 'outline-dark' : 'outline-light'} 
              size="sm"
              onClick={toggleTheme}
            >
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </Button>

            <Nav.Link
              href="tel:+9962471680"
              className="d-flex align-items-center gap-2"
            >
              <span>
                <small className="d-block text-muted">Need help?</small>
                <strong>+996 247-1680</strong>
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarRent;