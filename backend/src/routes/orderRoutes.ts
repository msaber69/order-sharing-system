import express from 'express';
import { OrderService } from '../services/order.service';

const router = express.Router();

const orderRoutes = (orderService: OrderService) => {
  router.post('/', async (req, res) => {
    try {
      const orderData = req.body;
      const order = await orderService.createOrder(orderData);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create order' });
    }
  });

  router.get('/:orderId', async (req, res) => {
    try {
      const { orderId } = req.params;
      const order = await orderService.getOrderById(orderId);
      if (!order) {
        res.status(404).json({ error: 'Order not found' });
      } else {
        res.status(200).json(order);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve order' });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const orders = await orderService.getAllOrders();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve orders' });
    }
  });

  router.put('/:orderId', async (req, res) => {
    try {
      const { orderId } = req.params;
      const updatedOrderData = req.body;
      const updatedOrder = await orderService.updateOrder(orderId, updatedOrderData);
      if (!updatedOrder) {
        res.status(404).json({ error: 'Order not found' });
      } else {
        res.status(200).json(updatedOrder);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update order' });
    }
  });

  router.delete('/:orderId', async (req, res) => {
    try {
      const { orderId } = req.params;
      const isDeleted = await orderService.deleteOrder(orderId);
      if (!isDeleted) {
        res.status(404).json({ error: 'Order not found' });
      } else {
        res.status(200).json({ message: 'Order deleted successfully' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete order' });
    }
  });

  return router;
};

export default orderRoutes;
