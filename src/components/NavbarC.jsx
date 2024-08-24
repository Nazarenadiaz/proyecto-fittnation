import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavbarC = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <NavLink to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3y9HMdddArZOshBzTKmM4pln2fHcn6_2JQ&s"
              alt=""
              width="100"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
              <NavLink className="nav-link" to="/sobre-nosotros">
                Sobre Nosotros
              </NavLink>
              <NavLink className="nav-link" to="/contacto">
                contacto
              </NavLink>
            </Nav>
            <Nav className="ms-auto">
              <NavLink className="nav-link" to="/inicio-sesion">
                Iniciar sesion
              </NavLink>
              <NavLink className="nav-link" to="/registrarse">
                Registrarse
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
