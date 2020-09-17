import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Sample Archive</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav.Link href="http://localhost:8080/auth/login">Login</Nav.Link>
            </Navbar.Collapse>
            </Navbar>


        );
    }
}

export default Header;