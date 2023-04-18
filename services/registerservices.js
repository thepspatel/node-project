const express = require('express');
const jwt = require('jsonwebtoken');
const { secret_jwt } = require("../config/config");


const registerr = async (req, res) => {
    const { name, email, city, mobile } = req.body;
    name = req.body.name;
    email = req.body.email;
    city = req.body.city;
    mobile = req.body.mobile
}

const loginn = async (req, res) => {
    const { email, password } = req.body;
    if (email === email && password === req.body.password) {
        const token = await jwt.sign({ email }, config.secret_jwt);
        res.json(token);
    }
    else {
        res.json('Invalid Credentials');
    }
}

const resetpasswordlink = async (req, res) => {
    const { email } = req.body;
    if (email === email) {
        res.json('Link has been sent succesfully');
    }
    else {
        res.json('Enter the valid email');
    }
}

const passwordtokenverify = async (req, res) => {
    const { email, token } = req.body;
    if (resetpasswordtoken[email] === token) {
        const token = jwt.sign({ email }, config.secret_jwt);
    }
    else {
        res.json('Invalid token');
    }
}

const resetpassword = async (req, res) => {
    const { password, token } = req.body;
    //verify the jwt
    jwt.verify(token, secret_jwt, (err, decoded) => {
        if (err) {
            res.status(401).send('Invalid Token')
        }
        else {
            password = password;
            res.json('Password reset successfully');
        }
    })
}
const userinfo = async (req, res) => {
    const name = req.name;
    const email = email;
    res.json({ name, email });
}

module.exports = {
    registerr,
    loginn,
    resetpasswordlink,
    passwordtokenverify,
    resetpassword,
    userinfo
}