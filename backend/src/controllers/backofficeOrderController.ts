import { Request, Response } from 'express';
import { BackofficeOrderService } from '../services/backoffice.order.service';

const backofficeOrderService = new BackofficeOrderService();

export class BackofficeOrderController {
  async getBackofficeOrdersByParkId(req: Request, res: Response): Promise<void> {
    try {
      const { parkId } = req.params;
      const backofficeOrders = backofficeOrderService.getBackofficeOrdersByParkId(parkId);
      res.status(200).json(backofficeOrders);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
