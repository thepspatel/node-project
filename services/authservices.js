const { validationResult } = require('express-validator');
const config = require('../config/config');
const jwt = require('jsonwebtoken');

const createtoken = async (email) => {
    try {

        const token = await jwt.sign({ email: email }, config.secret_jwt);
        return token;
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const register = (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty) {
        res.status(400).send({ errors: errors.array() });

    }
}

const login = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty) {
        res.status(400).send({ errors: errors.array() });

    }
}

const userinfo = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty) {
        res.status(400).send({ errors: errors.array() });
    }
}

const getprofile = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty) {
        res.status(400).send({ errors: errors.array() });
    }
}

const updateprofile = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty) {
        res.status(400).send({ errors: errors.array() });
    }
}


module.exports = {
    createtoken,
    register,
    login,
    userinfo,
    getprofile,
    updateprofile
};