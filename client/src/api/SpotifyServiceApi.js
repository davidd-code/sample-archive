import axios from 'axios'

const backendUrl = "http://localhost:8080";

class SpotifyServiceApi {

    // Get all playlists
    getAllPlaylists(access_token) {
        // axios.get(backendUrl + '/playlists/', {
        //     params: {
        //         token: access_token
        //     }
        // })
        axios({
            method: "get",
            url: backendUrl + "/playlists/",
            params: {
                token: access_token,
                test: "Dlsdkjafdkj"
            }
        })
            .then(res => {
                console.log(res);

            })
    }

}

export default new SpotifyServiceApi();