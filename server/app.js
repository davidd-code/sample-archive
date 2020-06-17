const express = require('express');
const app = express();
const logger = require('morgan');
const dotenv = require('dotenv').config();
const cors = require('cors');

require('./src/database');

const DB_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

app.use(cors());


app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`)
})