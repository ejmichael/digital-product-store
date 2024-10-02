// pdfController.js
const mongoose = require('mongoose');
const { getGfs } = require('../db'); // Import the function to get gfs
const PDFFile = require('../models/pdfModel');

const uploadPDF = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }

    // Convert the file buffer to a Base64 string
    const base64File = req.file.buffer.toString('base64');

    // Create a document to store in MongoDB
    const newDocument = {
        filename: req.file.originalname,
        contentType: req.file.mimetype,
        data: base64File, // Store as Base64 string
    };

    try {
        // Save to MongoDB using await
        const savedFile = await PDFFile.create(newDocument);
        
        res.json({
            message: 'File uploaded successfully!',
            file: savedFile,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error saving file to database.' });
    }
};

const downloadPDF = async (req, res) => {
    const { fileId } = req.params; // Get the PDF ID from the request parameters

    try {
        const file = await PDFFile.findById(fileId); // Fetch the file from MongoDB

        if (!file) {
            return res.status(404).json({ error: 'File not found.' });
        }

        // Set the response headers for the file download
        res.set({
            'Content-Type': file.contentType,
            'Content-Disposition': `attachment; filename="${file.filename}"`,
        });

        // Send the file data as response
        const buffer = Buffer.from(file.data, 'base64'); // Convert Base64 back to binary
        res.send(buffer); // Send the file
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving file.' });
    }
};

module.exports = {
    uploadPDF,
    downloadPDF
};
