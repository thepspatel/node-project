const { check } = require('express-validator');

exports.registerValidation = [
    check('name', 'Enter a valid name').not().isEmpty().isAlpha(),
    check('email', 'Enter a valid email').isEmail(),
    check('city', 'Enter a  city name').not().isEmpty().isAlpha(),
    check('mobile', 'Enter a valid mobile number').isNumeric(),
]
exports.loginValidation = [
    check('email', 'Enter a valid Email').isEmail(),
    check('password', 'Enter a  valid password').not().isEmpty().isAlpha(),
]
exports.userinfoValidation = [
    check('name', 'Enter a valid name').not().isEmpty().isAlpha(),
    check('email', 'Enter a valid email').isEmail(),
    check('city', 'Enter a valid city').not().isEmpty().isAlpha(),
    check('mobile', 'Enter a valid mobile').isNumeric(),
]
exports.updateprofileValidation = [
    check('name', 'Enter a valid name').not().isEmpty().isAlpha(),
    check('email', 'Enter a valid email').isEmail(),
    check('city', 'Enter a valid city').not().isEmpty().isAlpha(),
    check('mobile', 'Enter a valid mobile').isNumeric(),
]
exports.getprofileValidation = [
    check('email', 'Enter a valid email').isEmail(),
    check('password', 'Enter a valid password').not().isEmpty().isAlpha(),
]
