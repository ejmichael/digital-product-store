const express = require('express');
const { createOrder, getOrderById, getAllOrders, confirmOrderPaid} = require('../controllers/orderController')
const {protect} = require('../middleware/authMiddleware')

const Order = require('../models/orderModel')
const Product = require('../models/productModel')

const orderRouter = express.Router();

orderRouter.post('/create/:orderRef', protect, createOrder) 
orderRouter.get('/get/:orderId', getOrderById)
orderRouter.get('/get-all-orders/:userId', getAllOrders)
orderRouter.get('/confirm/:orderRef', confirmOrderPaid)


// Confirm payment via PayFast IPN
orderRouter.post('/payfast/ipn', async (req, res) => {
    const paymentReference = req.body.m_payment_id; // PayFast's reference ID

    try {
        const order = await Order.findOne({ orderRef: paymentReference });

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        // Update order status to 'paid'
        order.status = 'paid';
        await order.save();

        res.status(200).send("Payment confirmed");
    } catch (error) {
        console.error("Error confirming payment:", error);
        res.status(500).json({ message: "Error confirming payment", error });
    }
});
  
  

module.exports = orderRouter