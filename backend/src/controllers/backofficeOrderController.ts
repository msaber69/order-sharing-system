import { Request, Response } from 'express';
import { BackofficeOrderService } from '../services/backoffice.order.service';


export class BackofficeOrderController {
  constructor(private backofficeOrderService: BackofficeOrderService) {}

  sendOrderToBackoffice(req: Request, res: Response) {
    try {
      const order = req.body;
      const backofficeOrder = this.backofficeOrderService.sendOrderToBackoffice(order);
      res.status(201).json(backofficeOrder);
    } catch (error) {
      res.status(500).json({ error: 'Failed to send order to backoffice' });
    }
  }

  getBackofficeOrdersByParkId(req: Request, res: Response) {
    try {
      const { parkId } = req.params;
      const orders = this.backofficeOrderService.getBackofficeOrdersByParkId(parkId);
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve backoffice orders' });
    }
  }
}

export default BackofficeOrderController;
