import React, { Component } from 'react';
import AuthServiceApi from '../api/AuthServiceApi'
import {  Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Header extends Component {

    render() {
        const isUserLoggedIn = AuthServiceApi.isUserLoggedIn();
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Sample Archive</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>

                {!isUserLoggedIn &&
                    <Nav>
                        <Nav.Link href="http://localhost:8080/auth/login">Login</Nav.Link>
                    </Nav> 
                }
                {isUserLoggedIn &&
                    <Nav>
                        <Nav.Link href="http://localhost:8080/auth/login">{localStorage.getItem('display_name')}</Nav.Link>
                        <Nav.Link href="#">Log out</Nav.Link>
                    </Nav>
                }



            </Navbar.Collapse>
            </Navbar>


        );
    }
}

export default Header;