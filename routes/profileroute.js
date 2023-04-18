const express = require('express');
const userRoute = express.Router();
const profileservice = require('../services/profileservices');
const { updateprofileValidation } = require('../validations/authValidation');
const { getprofileValidation } = require('../validations/authValidation');


userRoute.post('/updateprofile', updateprofileValidation, profileservice.updateprofile);
userRoute.get('/getprofile', getprofileValidation, profileservice.getprofile);
userRoute.post('/profile/changepassword', profileservice.profilechangepassword);

module.exports = userRoute;