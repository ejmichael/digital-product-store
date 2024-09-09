const express = require('express');
const { getUserData, createUser, userLogin } = require('../controllers/userController');


const userRoute = express.Router();

userRoute.get('/get-user-data', getUserData)
userRoute.post('/create-user', createUser)
userRoute.get('/user-login', userLogin)


module.exports = userRoute