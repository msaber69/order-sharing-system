import express from 'express';
import { PaymentController } from '../controllers/paymentController';

const router = express.Router();

const secretKey = 'sk_test_51Oo9XUEzFTNbZPpRszO62lmamCRs8Sg2TXhi3NQZAB7zPqh49UsF7QTZoYaL6D1s7dVVR2IKRQ4TlTWYr5GrZMep00NzPLgHnw';

const paymentController = new PaymentController(secretKey);

router.post('/create-payment-intent', paymentController.createPaymentIntent);
router.post('/confirm-payment-intent', paymentController.confirmPaymentIntent);

export default router;
