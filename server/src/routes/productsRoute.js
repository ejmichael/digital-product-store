const express = require('express');
const { getAllProduct, getProductByID, createProduct, deleteProductByID } = require('../controllers/productController');

const productRouter = express.Router()

productRouter.get('/get-products', getAllProduct)

productRouter.get('/:productID', getProductByID)
productRouter.delete('/delete/:productID', deleteProductByID)

productRouter.post('/create-product', createProduct)

module.exports = productRouter

