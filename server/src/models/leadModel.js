const mongoose = require('mongoose')

const leadSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        
    },
    emailAddress: {
        type: String,
        required: [true, "Please enter a valid email address."],
        unique: true
    },
    phoneNumber:{
        type: String,
        required: [true, "Please enter a valid phone number."],
        unique: true
    },
    service: {
        type: String,
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Lead', leadSchema)


