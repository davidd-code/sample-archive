import axios from 'axios';
require('dotenv').config();

const backendUrl = "http://localhost:8080/";

class AuthServiceApi {

    logInUser() {
        axios.get(backendUrl+"auth/login")
            .then(res => {
                console.log(res.data);
            });
    }

    getUserFromAccessToken(access_token) {
        var user;
        return axios.get(backendUrl + "user/get/" + access_token, {
            params: {
                token: access_token
            }
        })
            .then(res => {
                localStorage.setItem('display_name', res.data.display_name);
                localStorage.setItem('email', res.data.email);
                localStorage.setItem('spotify_uri', res.data.external_urls.spotify);
                localStorage.setItem('country', res.data.country);
                localStorage.setItem('user_id', res.data.id);
                localStorage.setItem('profile_img', res.data.images[0].url);
                localStorage.setItem('access_token', res.data.access_token);
                localStorage.setItem('refresh_token', res.data.refresh_token);

                user = {
                    display_name: res.data.display_name,
                    email: res.data.email,
                    spotify_uri: res.data.external_urls.spotify,
                    country: res.data.country,
                    user_id: res.data.id,
                    profile_img: res.data.images[0].url
                }

                return user

            })
    }

    isUserLoggedIn() {
        let user = localStorage.getItem('user_id');
        if (user === null) {
            return false;
        }
        return true;
    }

    logOutUser() {
        localStorage.clear();
        const url = 'https://accounts.spotify.com/en/logout/'
        const spotifyLogoutWindow = window.open(url, 'Spotify Logout', 'width=700, height=500, top=40, left=40');
        setTimeout(() => spotifyLogoutWindow.close(), 200);
        window.location.reload(false);
        window.location.href = "/"
    }



}

export default new AuthServiceApi();