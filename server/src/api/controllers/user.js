const User = require('../models/user');
const mongoose = require('mongoose');

exports.create_user = (req, res) => {
    // Check if user exists in database
    User.findOne({ spotify_id: req.body.id}).then(user => {
        if(user) {
            console.log("User already exists");
        } else {
            const new_user = new User({
                _id: new mongoose.Types.ObjectId(),
                display_name: req.body.display_name,
                profile_img_url: req.body.profile_img_url,
                spotify_id: req.body.spotify_id,
                spotify_url: req.body.spotify_url,
                access_token: req.body.access_token,
                refresh_token: req.body.refresh_token,
                email: req.body.email
            });

            new_user.save().then(user => {
                res.json("New location added");
            })
        }
    })
}