import { Router } from 'express';

import OrderController from '../controllers/order.controller';

const orderRoute = Router();

orderRoute.post('/', OrderController.postOrder);
orderRoute.put('/:id', OrderController.putOrder);
orderRoute.get('/', OrderController.getOrders);

export default orderRoute;
