const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        default: ''
    },
    pdfFileId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'PDFFile' 
    },
    rating:{
        type: Number,
        default: 0
    },
    clicks: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)