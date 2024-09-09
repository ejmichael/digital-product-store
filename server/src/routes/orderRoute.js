const express = require('express');

const { createOrder, getOrderById, getAllOrders} = require('../controllers/orderController')

const orderRouter = express.Router();

orderRouter.post('/create/:orderRef', createOrder) 
orderRouter.get('/get/:orderId', getOrderById)
orderRouter.get('/get-all-orders', getAllOrders)

module.exports = orderRouter