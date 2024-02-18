import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand
          as={NavLink}
          to={"/"}
          className={location.pathname === "/" ? "active" : ""}
        >
          No-Spoiler
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to={"/"}
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={"/ei"}
              className={location.pathname === "/ei" ? "active" : ""}
            >
              Our Services
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={"/oo"}
              className={location.pathname === "/oo" ? "active" : ""}
            >
              Link
            </Nav.Link>
            <NavDropdown
              title="Account"
              as={NavLink}
              to={"/ww"}
              className={location.pathname === "/ww" ? "active" : ""}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                as={NavLink}
                to={"/oot"}
                className={
                  location.pathname === "/oot"
                    ? "active text-center"
                    : "text-center"
                }
              >
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to={"/ooo"}
                className={
                  location.pathname === "/ooo"
                    ? "active text-center"
                    : "text-center"
                }
              >
                LogIn
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={NavLink}
                to={"/ooi"}
                className={
                  location.pathname === "/ooi"
                    ? "active text-center"
                    : "text-center"
                }
              >
                Terms of service
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
