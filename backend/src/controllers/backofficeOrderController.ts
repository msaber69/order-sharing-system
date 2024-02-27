import { Request, Response } from 'express';
import { BackofficeOrderService } from '../services/backoffice.order.service';

export class BackofficeOrderController {
  constructor(private backofficeOrderService: BackofficeOrderService) {}

  async sendOrderToBackoffice(req: Request, res: Response) {
    try {
      const orderData = req.body;
      const backofficeOrder = await this.backofficeOrderService.sendOrderToBackoffice(orderData);
      res.status(201).json(backofficeOrder);
    } catch (error) {
      res.status(500).json({ error: 'Failed to send order to backoffice' });
    }
  }

  async getBackofficeOrdersByParkId(req: Request, res: Response) {
    try {
      const { parkId } = req.params;
      const orders = await this.backofficeOrderService.getBackofficeOrdersByParkId(parkId);
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve backoffice orders by park ID' });
    }
  }

  async getAllBackofficeOrders(req: Request, res: Response) {
    try {
      const orders = await this.backofficeOrderService.getAllBackofficeOrders();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve all backoffice orders' });
    }
  }

  async getBackofficeOrderById(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const order = await this.backofficeOrderService.getBackofficeOrderById(orderId);
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ error: 'Backoffice order not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve backoffice order by ID' });
    }
  }

  async updateBackofficeOrder(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const updatedOrderData = req.body;
      const order = await this.backofficeOrderService.updateBackofficeOrder(orderId, updatedOrderData);
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ error: 'Backoffice order not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update backoffice order' });
    }
  }

  async deleteBackofficeOrder(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const success = await this.backofficeOrderService.deleteBackofficeOrder(orderId);
      if (success) {
        res.status(200).json({ message: 'Backoffice order deleted successfully' });
      } else {
        res.status(404).json({ error: 'Backoffice order not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete backoffice order' });
    }
  }
}
