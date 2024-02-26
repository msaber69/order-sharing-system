import express from 'express';
import { BackofficeOrderController } from '../controllers/backofficeOrderController';

const router = express.Router();
const backofficeOrderController = new BackofficeOrderController();

router.get('/backoffice/orders/park/:parkId', backofficeOrderController.getBackofficeOrdersByParkId);

export default router;
