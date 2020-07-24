const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authenticate');

router.get('/login', AuthController.get_login);
router.get('/callback', AuthController.get_callback);
router.get('/refresh_token', AuthController.get_refresh_token);

module.exports = router;