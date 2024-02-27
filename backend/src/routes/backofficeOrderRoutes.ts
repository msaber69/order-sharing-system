import express from 'express';
import { BackofficeOrderController } from '../controllers/backofficeOrderController';
import { BackofficeOrderService } from '../services/backoffice.order.service';

const router = express.Router();
const backofficeOrderService = new BackofficeOrderService();
const backofficeOrderController = new BackofficeOrderController(backofficeOrderService);

router.post('/', async (req, res) => await backofficeOrderController.sendOrderToBackoffice(req, res));
router.get('/:parkId', async (req, res) => await backofficeOrderController.getBackofficeOrdersByParkId(req, res));
router.get('/', async (req, res) => await backofficeOrderController.getAllBackofficeOrders(req, res));
router.get('/:orderId', async (req, res) => await backofficeOrderController.getBackofficeOrderById(req, res));
router.put('/:orderId', async (req, res) => await backofficeOrderController.updateBackofficeOrder(req, res));
router.delete('/:orderId', async (req, res) => await backofficeOrderController.deleteBackofficeOrder(req, res));

export default router;
