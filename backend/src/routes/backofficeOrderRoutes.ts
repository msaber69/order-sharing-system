import express from 'express';
import { BackofficeOrderService } from '../services/backoffice.order.service';

const router = express.Router();

const backofficeRoutes = (backofficeOrderService: BackofficeOrderService) => {
  router.post('/', async (req, res) => {
    try {
      const orderData = req.body;
      const backofficeOrder = await backofficeOrderService.sendOrderToBackoffice(orderData);
      res.status(201).json(backofficeOrder);
    } catch (error) {
      res.status(500).json({ error: 'Failed to send order to backoffice' });
    }
  });

  router.get('/:parkId', async (req, res) => {
    try {
      const { parkId } = req.params;
      const orders = await backofficeOrderService.getBackofficeOrdersByParkId(parkId);
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve backoffice orders' });
    }
  });

  return router;
};

export default backofficeRoutes;
