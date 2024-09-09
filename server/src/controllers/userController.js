const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel')

const getUserData = async (req, res) => {
    res.send('Getting user data')
}


const createUser = async(req, res) => {
    const {name, surname, email, phoneNumber, password} = req.body;

    if(!name || !surname || !email || !phoneNumber || !password) {
        res.status(400).json({message: 'Please enter all the required fields.'})
    }

    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400).json({message: 'User already exists!'})
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPW = await bcrypt.hash(password, salt)

    const user = await User.create({
        name, 
        surname, 
        email, 
        phoneNumber, 
        password: hashedPW
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            token: generateToken(user._id)
        })
    } 

    res.send('Creating user')
}

const userLogin = (req, res) => {
    res.send('Login user')
}

//generate token 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    userLogin,
    createUser,
    getUserData
}