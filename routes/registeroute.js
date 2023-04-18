const express = require('express');
const router = express.Router();
const { registerValidation } = require('../validations/authValidation');
const { loginValidation } = require('../validations/authValidation');
const { userinfoValidation } = require('../validations/authValidation');
const authservice = require('../services/authservices');
const registerservice = require('../services/registerservices');

router.post('/register', registerValidation, authservice.register);
router.post('/login', loginValidation, authservice.login);
router.post('/resetpasswordlink', registerservice.resetpasswordlink);
router.post('/passwordtokenverify', registerservice.passwordtokenverify);
router.post('/resetpassword', registerservice.resetpassword);
router.get('/userinfo', userinfoValidation, registerservice.userinfo);

module.exports = router;

