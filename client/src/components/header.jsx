import React, { Component } from 'react';
import AuthServiceApi from '../api/AuthServiceApi'
import {  Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: undefined
        }
        this.handleLogIn = this.handleLogIn.bind(this);
    }

    componentDidMount() {
        if(AuthServiceApi.isUserLoggedIn()) {
            console.log("me")
            this.setState({
                logged_in: true
            })
        } else if (!AuthServiceApi.isUserLoggedIn()) {
            console.log("please")
            this.setState({
                logged_in: false
            })
        }
    }

    handleLogIn = () => {
        console.log("asldkfj")
        // localStorage.setItem('user-id', '108')
        // this.setState({
            // logged_in: true
        // })
        window.location.href = "http://localhost:8080/auth/login";
        // if (AuthServiceApi.isUserLoggedIn()) {
        //     this.setState({
        //         logged_in: true
        //     });
        // }
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Sample Archive</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                        {this.state.logged_in &&
                            <Nav.Link href="/playlists">Playlists</Nav.Link>
                        }
            </Nav>
                {!this.state.logged_in &&
                    <Nav>
                        <Nav.Link href="#" onClick={this.handleLogIn}>Login</Nav.Link>
                        <Nav.Link href="#" onClick={AuthServiceApi.logOutUser}>Log out</Nav.Link>
                    </Nav> 
                }
                {this.state.logged_in &&
                    <Nav>
                        <Nav.Link href="/profile">{localStorage.getItem('display_name')}</Nav.Link>
                        <Nav.Link href="#" onClick={AuthServiceApi.logOutUser}>Loog out</Nav.Link>
                    </Nav>
                }
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;