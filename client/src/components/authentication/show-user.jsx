import React, { Component } from 'react';
import axios from 'axios';

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
            profile_img: '',
            user_id: ''
        }

        localStorage.setItem('access_token', this.state.access_token);
        localStorage.setItem('refresh_token', this.state.refresh_token);

        const backendUrl = "http://localhost:8080/";
        axios.get(backendUrl + "user/get/" + this.state.access_token, {
            params: {
                token: this.state.access_token
            }
        })
            .then(res => {
                console.log("response received");
                console.log(res.data)
                this.setState({
                    display_name: res.data.display_name,
                    email: res.data.email,
                    spotify_uri: res.data.external_urls.spotify,
                    country: res.data.country,
                    user_id: res.data.id,
                    profile_img : res.data.images[0].url
                })
            })


    }

    render() {
        return(
            <div>
                <h1>Logged in as {this.state.display_name}</h1>
                <p>Id {this.state.user_id}</p>
                <p>Email {this.state.email}</p>
                <p>Spotify URI {this.state.spotify_uri}</p>
                <p>Country {this.state.country}</p>
                <img src={this.state.profile_img}/>
                <a href="/">Back to home</a>
            </div>
 
        )
   }

}

export default ShowUserPage;