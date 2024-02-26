import express from 'express';
import { OrderController } from '../controllers/orderController';

const router = express.Router();
const orderController = new OrderController();

router.post('/orders', orderController.createOrder);
router.get('/orders/:orderId', orderController.getOrderById);
router.get('/orders', orderController.getAllOrders);

export default router;
