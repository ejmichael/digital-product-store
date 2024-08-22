const express = require('express');
const { getAllProduct, getProductByID, createProduct, deleteProductByID } = require('../controllers/productController');

const productRouter = express.Router()

productRouter.get('/products', getAllProduct)

productRouter.get('/products/:productID', getProductByID)
productRouter.delete('/products/delete/:productID', deleteProductByID)

productRouter.post('/create-product', createProduct)

module.exports = productRouter

