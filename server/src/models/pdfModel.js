// src/models/PDFFile.js
const mongoose = require('mongoose');

const PDFFileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  contentType: { type: String, required: true },
  data: { type: String, required: true }, // Base64 encoded PDF data
  // url field is optional, only necessary if you're storing URLs instead of file data
});

const PDFFile = mongoose.model('PDFFile', PDFFileSchema);

module.exports = PDFFile;
