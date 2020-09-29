const express = require('express');
const app = express();
const logger = require('morgan');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const auth_routes = require('./src/api/routes/authenticate')
const user_routes = require('./src/api/routes/user')
const playlist_routes = require('./src/api/routes/playlist')
// const auth_routes = require('./src/api/routes/spotify-authenticate');

require('./src/database');

// const DB_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'))
    .use(cors({origin: true}))
    .use(cookieParser());



// routes
app.use('/auth', auth_routes);
app.use('/user', user_routes);
app.use('/playlists', playlist_routes);

app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`)
})