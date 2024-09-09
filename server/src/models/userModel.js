const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: [true, "Please enter a valid email address."],
        unique: true
    },
    phoneNumber:{
        type: String,
        required: [true, "Please enter a valid phone number."],
        unique: true
    },
    password: {
        type: String,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)


