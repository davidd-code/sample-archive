import React, { Component } from 'react';
import SpotifyServiceApi from '../api/SpotifyServiceApi';

class PlaylistPage extends Component {

    componentDidMount() {
        SpotifyServiceApi.getAllPlaylists(localStorage.getItem('access_token'));
    }
 
    render() {
        return(
            <div className="container">
                <h1>Playlist page</h1>

                <a href="/">Back to home</a>
            </div>
        )
   }
}

export default PlaylistPage;