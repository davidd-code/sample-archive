const fetch = require('node-fetch');

const baseURL = 'https://api.spotify.com/v1'

exports.get_playlists = async(req, res) => {
    await fetch(baseURL + '/me/playlists', {
        headers: {
            "Authorization": `Bearer ${req.query.token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        res.json(data)
    })
}