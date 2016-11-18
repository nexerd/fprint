var express = require('express');
var router = express.Router();
var auth = require("../../auth/auth");

router.get('/SignIn', auth.MobileSignIn);

module.exports = router;
