var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth');

// used to sent link
router.post('/sent-otp', authController.sentOtp);

// used to verify otp
router.post('/verify-otp', authController.verifyOtp);

// used to get user info by using auth0 access token
router.post('/userinfo', authController.getUserInfo);

// used to get token info by using auth0 token
router.post('/tokeninfo', authController.getTokenInfo);

module.exports = router;
