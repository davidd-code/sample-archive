import React, { Component } from 'react';
import AuthServiceApi from '../api/AuthServiceApi'
import {  Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: false
        }
    }

    componentDidMount() {
        console.log("help")
        if(AuthServiceApi.isUserLoggedIn()) {
            console.log("me")
            this.setState({
                logged_in: true
            })
        } else {
            console.log("please")
            this.setState({
                logged_in: false
            })
        }
        console.log('bruh')
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Sample Archive</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
                {!this.state.logged_in &&
                    <Nav>
                        <Nav.Link href="http://localhost:8080/auth/login">Login</Nav.Link>
                        <Nav.Link href="#" onClick={AuthServiceApi.logOutUser}>Log out</Nav.Link>
                    </Nav> 
                }
                {this.state.logged_in &&
                    <Nav>
                        <Nav.Link href="http://localhost:8080/auth/login">{localStorage.getItem('display_name')}</Nav.Link>
                        <Nav.Link href="#" onClick={AuthServiceApi.logOutUser}>Loog out</Nav.Link>
                    </Nav>
                }
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;