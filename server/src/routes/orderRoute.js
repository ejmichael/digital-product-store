const express = require('express');
const { createOrder, getOrderById, getAllOrders} = require('../controllers/orderController')
const {protect} = require('../middleware/authMiddleware')

const orderRouter = express.Router();

orderRouter.post('/create/:orderRef', protect, createOrder) 
orderRouter.get('/get/:orderId', getOrderById)
orderRouter.get('/get-all-orders/:userId', getAllOrders)

module.exports = orderRouter