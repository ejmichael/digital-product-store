const express = require('express');
const multer = require('multer');
const { getAllProduct, getProductByID, createProduct, deleteProductByID } = require('../controllers/productController');
const { uploadPDF, downloadPDF } = require('../controllers/uploadPDFController');

const productRouter = express.Router();

// Set up multer storage to handle file uploads
const storage = multer.memoryStorage(); // Using memory storage for simplicity
const upload = multer({ storage });

// Product Routes

// Get all products
productRouter.get('/get-products', getAllProduct);

// Get product by ID
productRouter.get('/:productID', getProductByID);

// Delete product by ID
productRouter.delete('/delete/:productID', deleteProductByID);

// Create a new product with PDF upload
productRouter.post('/create-product', upload.single('file'), createProduct);

// Download a PDF associated with a product
productRouter.get('/download-pdf/:fileId', downloadPDF);

module.exports = productRouter;
