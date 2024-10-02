const express = require('express');
const multer = require('multer');
const { uploadPDF, downloadPDF} = require('../controllers/uploadPDFController');

// Set up the router
const PDFRouter = express.Router();

// GridFS Multer storage configuration (used in the controller)
const storage = new multer.memoryStorage();
const upload = multer({ storage });

// Routes
// Upload route
PDFRouter.post('/upload', upload.single('file'), uploadPDF);

// // Route to handle email request for a PDF
// PDFRouter.post('/request-pdf', uploadPDFController.requestPDF);

// // Route to download PDF
PDFRouter.get('/download/:fileId', downloadPDF);

module.exports = PDFRouter;
