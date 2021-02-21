const { Router } = require('express');

const OrderController = require('../controllers/order.controller');

const orderRoute = Router();

orderRoute.post('/', OrderController.postOrder);
orderRoute.put('/:id', OrderController.putOrder);
orderRoute.get('/', OrderController.getOrders);

module.exports = orderRoute;
