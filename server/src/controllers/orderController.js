const Order = require('../models/orderModel')
const Product = require('../models/productModel')

const createOrder = async (req, res) => {
    const { products, totalAmount } = req.body;

    if(!products || products.length === 0) {
        res.status(404).json({ message: "No products in cart"})
        return;
    }

    if(!totalAmount) {
        res.status(404).json({ message: "No total amount in cart"})
        return;
    }

    for(let i = 0; i < products.length; i++) {
        const productExists = await Product.findById(products[i]._id);

        if(!productExists) {
            res.status(404).json({ message: "Product not found:"  + products[i]._id})
            return
        }
    }

    let newOrder = await Order.create({
        products: products.map(product => product._id),
        totalAmount,
        status: 'placed'
    })

    res.status(200).json(newOrder)
}

const getOrderById = async (req, res) => {
    const { orderId } = req.params;

    const order = await Order.findById(orderId)

    if(!order) {
        res.status(400).json({ message: "Order not found"})
    }

    res.status(200).json(order)
}

const getAllOrders = async (req, res) => {
    const orders = await Order.find()

    if (!orders) {
        res.status(400).json({ message: "No orders found!"})
    }

    res.status(200).json(orders)
} 

const updateOrderStatus = async (req, res) => {}

module.exports = {
    createOrder,
    getOrderById,
    getAllOrders
}