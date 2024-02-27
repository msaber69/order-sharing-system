import express from 'express';
import { OrderController } from '../controllers/orderController';
import { OrderService } from '../services/order.service';

const router = express.Router();
const orderService = new OrderService();
const orderController = new OrderController(orderService);

router.post('/', orderController.createOrder);
router.get('/:orderId', orderController.getOrderById);
router.get('/', orderController.getAllOrders);
router.put('/:orderId', orderController.updateOrder);
router.delete('/:orderId', orderController.deleteOrder);
//router.get('/park/:parkId', orderController.getOrdersByParkId);

export default router;
