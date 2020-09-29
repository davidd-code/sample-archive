const fetch = require('node-fetch');

const baseURL = 'https://api.spotify.com/v1'

exports.get_playlists = async(req, res) => {
    await fetch(baseURL + '/me/playlists', {
        headers: {
            "Authorization": `Bearer ${req.params.token}`
        }
    })
    .then(response => {
        console.log("Request Received");
        console.log(req.params);
        response.json();
    })
    .then(data => {
        res.json(data)
    })
}