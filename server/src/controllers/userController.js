const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel')

const getUserData = async (req, res) => {
    res.send('Getting user data')
}


const createUser = async (req, res) => {
  const { firstName, surname, email, phoneNumber, password } = req.body;

  console.log(firstName, surname, email, phoneNumber, password);

  if (!firstName || !surname || !email || !phoneNumber || !password) {
    return res.status(400).json({ message: 'Please enter all the required fields.' });
  }

  try {
    const userExists = await User.findOne({emailAddress:email});

    if (userExists) {
      return res.status(400).json({ message: 'User already exists!' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPW = await bcrypt.hash(password, salt);

    const user = await User.create({
      name: firstName,
      surname,
      emailAddress:email,
      phoneNumber,
      password: hashedPW,
    });

    if (user) {
      return res.status(201).json({
        _id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.emailAddress,
        phoneNumber: user.phoneNumber,
        token: generateToken(user._id),
      });
    } else {
      return res.status(400).json({ message: 'Invalid user data.' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};


const userLogin = async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(!user) {
        // Incorrect credentials
        res.status(400).json({ message: 'User not found' });
    }

    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            token: generateToken(user._id),
        })
    }

    if(!(await bcrypt.compare(password, user.password))) {
        // Incorrect credentials
        res.status(400).json({ message: 'Invalid user credentials' });
    }
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