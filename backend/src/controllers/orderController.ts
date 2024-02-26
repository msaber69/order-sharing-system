import { Request, Response } from 'express';
import { OrderService } from '../services/order.service';

const orderService = new OrderService();

export class OrderController {
  async createOrder(req: Request, res: Response): Promise<void> {
    try {
      const newOrderData = req.body;
      const newOrder = orderService.createOrder(newOrderData);
      // Assuming order is sent to backoffice immediately after creation
      // You can modify this logic as needed
      res.status(201).json(newOrder);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getOrderById(req: Request, res: Response): Promise<void> {
    try {
      const { orderId } = req.params;
      const order = orderService.getOrderById(orderId);
      if (!order) {
        res.status(404).json({ error: 'Order not found' });
      } else {
        res.status(200).json(order);
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllOrders(req: Request, res: Response): Promise<void> {
    try {
      const orders = orderService.getAllOrders();
      res.status(200).json(orders);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
