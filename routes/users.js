const express = require('express');
const router = express.Router();
const { usersController } = require('../controller');

// *POST /user/signup
router.post('/signup', usersController.signup.post);

// *POST /user/signin
router.post('/signin', usersController.signin);

module.exports = router;