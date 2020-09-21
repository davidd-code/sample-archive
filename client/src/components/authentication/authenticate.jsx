import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthServiceApi from '../../api/AuthServiceApi';

var logged_user;

class AuthComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        AuthServiceApi.getUserFromAccessToken(this.props.location.pathname.split('=')[1].split('&')[0])
            .then(data => {
                localStorage.setItem('access_token', this.props.location.pathname.split('=')[1].split('&')[0]);
                localStorage.setItem('refresh_token', this.props.location.pathname.split('=')[2]);
                logged_user = data;
            });
    }

    render() {
        return (
            <Redirect to={{ pathname: "/profile" }} />
        );

    }
}



export default AuthComponent;