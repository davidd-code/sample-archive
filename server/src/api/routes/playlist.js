const express = require('express');
const router = express.Router();
const PlaylistController = require('../controllers/playlist');

router.get('/', PlaylistController.get_playlists);

module.exports = router;