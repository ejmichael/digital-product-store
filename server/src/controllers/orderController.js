const Order = require('../models/orderModel')
const Product = require('../models/productModel')
const axios = require('axios')

const createOrder = async (req, res) => {
    const { orderRef } = req.params;
    const { products, total } = req.body.cart;

    console.log(orderRef, total);

    try {

        if(!products || products.length === 0) {
            res.status(404).json({ message: "No products in cart"})
            return;
        }
    
        if(!total) {
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

        const response = await axios.get(`https://api.paystack.co/transaction/verify/${orderRef}`, {
          headers: {
            Authorization: `Bearer sk_test_b11cf16dd54a800fa5cebdbd4e9eb293c1337eaf` // Replace with your Paystack secret key
          }
        });

        console.log(response.data);
    
        if (response.data.status) {
          // Payment verified, handle success logic here
          let newOrder = await Order.create({
            products: products.map(product => product._id),
            totalAmount: total,
            status: 'placed',
            orderRef
        })
    
          res.status(200).json(response.data)
          //res.status(200).json({ success: true, data: response.data });
        } else {
          res.status(400).json({ success: false, message: 'Payment not verified' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Something went wrong' });
      }    
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