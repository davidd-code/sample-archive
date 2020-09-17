import React, { Component } from 'react';
import AuthServiceApi from '../../api/AuthServiceApi';

class ShowUserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            access_token: this.props.location.pathname.split('=')[1].split('&')[0],
            refresh_token: this.props.location.pathname.split('=')[2],
            display_name: '',
            email: '',
            spotify_uri: '',
            country: '',
            user_id: '',
            profile_img : ''
        };

        localStorage.setItem('access_token', this.state.access_token);
        localStorage.setItem('refresh_token', this.state.refresh_token);

    }

    componentWillMount() {
        AuthServiceApi.getUserFromAccessToken(this.props.location.pathname.split('=')[1].split('&')[0])
            .then(data => {
                console.log(data.display_name);
                this.setState({
                    display_name: data.display_name,
                    email: data.email,
                    spotify_uri: data.spotify_uri,
                    country: data.country,
                    user_id: data.user_id,
                    profile_img: data.profile_img
                });
            });
    }
 
    render() {
        return(
            <div className="container">
                <h1>Logged in as {this.state.display_name}</h1>
                <img src={this.state.profile_img}/>
                <p><strong>Id</strong> {this.state.user_id}</p>
                <p><strong>Email</strong> {this.state.email}</p>
                <p><strong>Spotify URI</strong> {this.state.spotify_uri}</p>
                <p><strong>Country</strong> {this.state.country}</p>
                <a href="/">Back to home</a>
            </div>
        )
   }
}

export default ShowUserPage;