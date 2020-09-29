import axios from 'axios'

const backendUrl = "http://localhost:8080";

class SpotifyServiceApi {

    // Get all playlists
    getAllPlaylists(access_token) {
        axios.get(backendUrl + '/playlists' , {
            params: {
                token: access_token
            }
        })
            .then(res => {
                console.log("saldfkj");
                console.log(access_token);
                console.log("asldkfjlasdkfj");

            })
    }

}

export default new SpotifyServiceApi();