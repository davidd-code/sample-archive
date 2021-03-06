var request = require('request');
var querystring = require('querystring');

const User = require('../models/user');
const mongoose = require('mongoose');
const { access } = require('fs');

var client_id = '4bcf916775bc4ffb9e56b16d4408da42'; // Your client id
var client_secret = process.env.CLIENT_SECRET; // Your secret
var redirect_uri = 'http://localhost:8080/auth/callback'; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function (length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

var stateKey = 'spotify_auth_state';

exports.get_login = (req, res) => {
    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    // your application requests authorization
    var scope = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
}

exports.get_callback = (req, res) => {
    // your application requests refresh and access tokens
    // after checking the state parameter

    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.redirect('/#' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        res.clearCookie(stateKey);
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {

                var access_token = body.access_token,
                    refresh_token = body.refresh_token;

                var options = {
                    url: 'https://api.spotify.com/v1/me',
                    headers: { 'Authorization': 'Bearer ' + access_token },
                    json: true
                };

                // use the access token to access the Spotify Web API
                request.get(options, function (error, response, body) {
                    
                    // Add user's details to NoSql Database
                    User.findOne( { spotify_id: body.id }).then(found_user => {
                        if (found_user) {
                            console.log("User exists in database");
                        } else {
                            const new_user = new User({
                                _id: new mongoose.Types.ObjectId(),
                                display_name: body.display_name,
                                profile_img_url: body.images[0].url,
                                spotify_id: body.id,
                                spotify_url: body.href,
                                access_token: access_token,
                                refresh_token: refresh_token,
                                email: body.email
                            });
                            new_user.save().then(saved_user => {
                                // res.json('New user added');
                                console.log("New user added");
                            })


                        }
                    })

                });

                // we can also pass the token to the browser to make requests from there
                console.log(access_token);
                console.log(refresh_token);
                res.redirect('http://localhost:3000/getUser/' +
                // res.redirect('http://localhost:8080/#' +
                        querystring.stringify({
                        access_token: access_token,
                        refresh_token: refresh_token
                    }));


            } else {
                res.redirect('/#' +
                    querystring.stringify({
                        error: 'invalid_token'
                    }));
            }
        });
    }
}

exports.get_refresh_token = (req, res) => {
    // requesting access token from refresh token
    var refresh_token = req.query.refresh_token;
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
        form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var access_token = body.access_token;
            res.send({
                'access_token': access_token
            });
        }
    });
}