import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthServiceApi from '../../api/AuthServiceApi';

// var logged_user;

class AuthComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        AuthServiceApi.saveUserAccessToken(this.props.location.pathname.split('=')[1].split('&')[0], this.props.location.pathname.split('=')[2])
    }

    render() {
        return (
            <Redirect to={{ pathname: "/profile" }} />
        );

    }
}



export default AuthComponent;