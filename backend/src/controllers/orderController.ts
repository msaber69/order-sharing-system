import express from 'express';
import { OrderService } from '../services/order.service';

const router = express.Router();

export class OrderController {
  constructor(private orderService: OrderService) {}

  createOrder = async (req: express.Request, res: express.Response) => {
    try {
      const order = await this.orderService.createOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Unable to create order' });
    }
  };

  getOrderById = async (req: express.Request, res: express.Response) => {
    try {
      const { orderId } = req.params;
      const order = await this.orderService.getOrderById(orderId);
      if (!order) {
        res.status(404).json({ error: 'Order not found' });
      } else {
        res.status(200).json(order);
      }
    } catch (error) {
      console.error('Error retrieving order by ID:', error);
      res.status(500).json({ error: 'Unable to retrieve order' });
    }
  };

  getAllOrders = async (req: express.Request, res: express.Response) => {
    try {
      const orders = await this.orderService.getAllOrders();
      res.status(200).json(orders);
    } catch (error) {
      console.error('Error retrieving all orders:', error);
      res.status(500).json({ error: 'Unable to retrieve orders' });
    }
  };

  updateOrder = async (req: express.Request, res: express.Response) => {
    try {
      const { orderId } = req.params;
      const updatedOrderData = req.body;
      const updatedOrder = await this.orderService.updateOrder(orderId, updatedOrderData);
      if (!updatedOrder) {
        res.status(404).json({ error: 'Order not found' });
      } else {
        res.status(200).json(updatedOrder);
      }
    } catch (error) {
      console.error('Error updating order:', error);
      res.status(500).json({ error: 'Unable to update order' });
    }
  };

  deleteOrder = async (req: express.Request, res: express.Response) => {
    try {
      const { orderId } = req.params;
      const isDeleted = await this.orderService.deleteOrder(orderId);
      if (!isDeleted) {
        res.status(404).json({ error: 'Order not found' });
      } else {
        res.status(200).json({ message: 'Order deleted successfully' });
      }
    } catch (error) {
      console.error('Error deleting order:', error);
      res.status(500).json({ error: 'Unable to delete order' });
    }
  };
}

export default OrderController;
