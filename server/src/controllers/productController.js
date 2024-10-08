const Product = require('../models/productModel')
const PDFFile = require('../models/pdfModel');

const getAllProduct = async (req, res) => {
    const products = await Product.find()

    if(!products || products.length === 0) {
        res.status(400).json({message: "Oh no! No products found"})
        return 
    }

    res.status(200).json(products)
}


const getProductByID = async (req, res) => {
    const {productID} = req.params

    console.log(productID);
    
    
    let product = await Product.findById(productID)

    if(!product) {
        res.status(404).json({message: "Product not found"})
        return
    }

    product.clicks = product.clicks + 1

    await product.save()

    res.status(201).json(product)
} 

const createProduct = async (req, res) => {
    const { productName, productDescription, price, imageUrl } = req.body;
  
    if (!productName || !productDescription || !price) {
      res.status(400).json({ message: "Provide all product details." });
      return;
    }
  
    // If there's no file uploaded, return an error
    if (!req.file) {
      return res.status(400).json({ error: 'No PDF file uploaded.' });
    }
  
    // Handle PDF upload
    const base64File = req.file.buffer.toString('base64');
    
    const pdfDocument = {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
      data: base64File,
    };
  
    try {
      // Save the uploaded PDF file to the database
      const savedFile = await PDFFile.create(pdfDocument);
  
      // Now create the product, including the PDF file reference (e.g., URL or file ID)
      const newProduct = await Product.create({
        productName,
        productDescription,
        price,
        imageUrl,
        pdfFileId: savedFile._id, // Storing the PDF file ID or URL in the product
      });
  
      res.status(200).json({
        message: 'Product and PDF uploaded successfully!',
        product: newProduct,
        pdf: savedFile,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating product or uploading PDF.' });
    }
  };

const deleteProductByID = async (req, res) => {
    const {productID} = req.params;

    const deletedProduct = await Product.findByIdAndDelete(productID);

    if(!deletedProduct) {
        res.status(400).json({message: 'Product not found'})
        return
    }

    res.status(200).json({message: 'Product deleted successfully'})
}

module.exports = {
    getProductByID,
    getAllProduct,
    createProduct,
    deleteProductByID
}