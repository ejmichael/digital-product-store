const jwt = require('jsonwebtoken');
const User = require('../models/userModel')

const protect = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // get token from headers
            token = req.headers.authorization.split(' ')[1]

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get user from token
            req.user = await User.findById(decoded.id).select('-password')
            
            next()
        } catch (error) {
            console.log(error)
            res.status(401).json({ error: "Not authorized"})
        }
    }
}

module.exports = {protect}