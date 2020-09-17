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
            </div>
        );

    }
}

export default AuthComponent;