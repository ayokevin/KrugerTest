import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    Navbar,
    Container,
    Nav,
    NavDropdown
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
    return (
        <Navbar className='Navbar' bg="light" expand="lg" >
            <Container>
                <Navbar.Brand as={NavLink} to="/Login">Kruger</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Vacunacion" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/">Login</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/userManager">Manejo de usuarios</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/employeeForm">Empleado</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
