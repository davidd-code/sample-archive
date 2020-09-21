import React, { Component } from 'react';
// import user from '../../../../server/src/api/models/user';
import AuthServiceApi from '../../api/AuthServiceApi';

class ShowUserPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display_name: localStorage.getItem('display_name'),
            email: localStorage.getItem('email'),
            spotify_uri: localStorage.getItem('spotify_uri'),
            country: localStorage.getItem('country'),
            user_id: localStorage.getItem('user_id'),
            profile_img : localStorage.getItem('profile_img')
        }

    }

    componentDidMount() {
        this.setState = {
            display_name: localStorage.getItem('display_name'),
            email: localStorage.getItem('email'),
            spotify_uri: localStorage.getItem('spotify_uri'),
            country: localStorage.getItem('country'),
            user_id: localStorage.getItem('user_id'),
            profile_img : localStorage.getItem('profile_img')
        };
    }
 
    render() {
        return(
            <div className="container">
                <h1>Logged in as {localStorage.getItem('profile_name')}</h1>
                <img src={localStorage.getItem('profile_img')}/>
                <p><strong>Id</strong> {localStorage.getItem('user_id')}</p>
                <p><strong>Email</strong> {localStorage.getItem('email')}</p>
                <p><strong>Spotify URI</strong> {localStorage.getItem('spotify_uri')}</p>
                <p><strong>Country</strong> {localStorage.getItem('country')}</p>

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