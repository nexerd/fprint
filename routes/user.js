var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");
var auth = require("../auth/auth");

router.get('/SignIn', userController.SignIn);

router.get('/SignUp', userController.SignUp);

router.post('/SignIn', auth.SignIn);

router.post('/SignUp', auth.SignUp);

module.exports = router;
