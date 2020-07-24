const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    display_name: { type: String },
    profile_img_url: { type: String },
    spotify_id : { type: String },
    spotify_url : { type: String },
    access_token : { type: String },
    refresh_token : { type: String },
    email: {type: String }
})

module.exports = mongoose.model('User', userSchema);