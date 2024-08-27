const Product = require('../models/productModel')

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
    const {productName, productDescription, price, imageUrl} = req.body.productInfo;

    console.log(price, productDescription, productName);
    

    if(!productName || !productDescription || !price) {
        res.status(400).json({message: "Provide all product details."})
        return 
    }

    let product = await Product.create({
        productName, 
        productDescription, 
        price, 
        imageUrl
    })

    res.status(200).json({message: "Product created", product})

}

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