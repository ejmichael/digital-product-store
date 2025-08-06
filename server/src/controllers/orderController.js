const Order = require('../models/orderModel')
const Product = require('../models/productModel')
const axios = require('axios');
const sendEmail = require('../utils/sendEmail');

const createOrder = async (req, res) => {
    
  console.log("Creating order backend");
  const { orderRef } = req.params;
    // const { streetAddress, city, postCode } = req.body.deliveryAddress;
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

        console.log(req.user);

        let pendingOrder = await Order.create({
          user: req.user.id,
          products: products.map(product => product._id),
          totalAmount: total,
          status: 'pending',
          orderRef
      })

      res.status(201).json(pendingOrder)

      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Something went wrong' });
      }    
}

const confirmOrderPaid = async (req, res) => {
  const { orderRef } = req.params;

  try {
    const order = await Order.findOne({ orderRef }).populate("user");
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.status = "completed";
    order.paidAt = new Date();
    await order.save();

    await sendEmail(order); // optional

    res.status(200).json({ success: true, message: "Order confirmed as paid" });
  } catch (err) {
    console.error("Error confirming order:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getOrderById = async (req, res) => {
    const { orderId } = req.params;

    const order = await Order.findById(orderId).populate('products').exec();
 
    if(!order) {
        res.status(400).json({ message: "Order not found"})
    }

    res.status(200).json(order)
}

const getAllOrders = async (req, res) => {
  const {userId} = req.params
    const orders = await Order.find({ user: userId })

    if (!orders) {
        res.status(400).json({ message: "No orders found!"})
    }

    res.status(200).json(orders)
} 

const updateOrderStatus = async (req, res) => {}

module.exports = {
    createOrder,
    getOrderById,
    getAllOrders,
    confirmOrderPaid
}