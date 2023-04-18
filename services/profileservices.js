const express = require('express');
const jwt = require('jsonwebtoken');
const { secret_jwt } = require('../config/config');

const updateprofile = async (req, res) => {
    const { name, email, city, mobile } = req.body;
    if (!name || email || city || mobile) {
        res.status(400).send('Invalid Token');
    }

    //update the profile
    name = name;
    email = email;
    city = city;
    mobile = mobile;

    //send a response
    res.status(201).send('Profile updated Successfully');

}

const getprofile = async (req, res) => {
    const { email, password } = req.body;
    if (email === email || password === password) {
        res.json(email && password);
    }
    else {
        res.json('Invalid Credentials');
    }
}

const profilechangepassword = async (req, res) => {
    const { password } = req.body;
    if (!password) {
        res.json('Enter the password correctly');
    }
    else {
        res.json("Password changed successfully");
    }
}


module.exports = {
    updateprofile,
    getprofile,
    profilechangepassword
}