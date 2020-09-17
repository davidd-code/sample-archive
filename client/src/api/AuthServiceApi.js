import axios from 'axios';
require('dotenv').config();

class AuthServiceApi {

    getUserFromAccessToken(access_token) {
        const backendUrl = "http://localhost:8080/";
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


}

export default new AuthServiceApi();