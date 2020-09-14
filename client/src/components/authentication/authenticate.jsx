import React, { Component } from 'react';

class AuthComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            access_token: localStorage.getItem('access_token'),
            refresh_token: localStorage.getItem('refresh_token')
        }
    }

    render() {
        return (
            <div>

                <a className="login-a" href="http://localhost:8080/auth/login">LOGIN</a>
                <p>{this.state.refresh_token}</p>
                <p>{this.state.access_token}</p>
            </div>
        );

    }
}

export default AuthComponent;