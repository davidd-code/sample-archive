const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.get('/get/:token', UserController.get_user);

module.exports = router;