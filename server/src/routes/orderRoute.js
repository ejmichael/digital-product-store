const express = require('express');

const { createOrder, getOrderbyId, getAllOrders} = require('../controllers/orderController')

const orderRouter = express.Router();

orderRouter.post('/order/create', createOrder)
orderRouter.get('/order/get/:orderId', getOrderById)
orderRouter.get('/order/get-all-orders', getAllOrders)

module.exports = orderRouter