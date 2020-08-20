const express = require('express');
const app = express();
const logger = require('morgan');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const auth_routes = require('./src/api/routes/authenticate')

require('./src/database');

const DB_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

app.use(express.static(__dirname + '/public'))
    .use(cors())
    .use(cookieParser());

app.use('/auth', auth_routes);

app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`)
})