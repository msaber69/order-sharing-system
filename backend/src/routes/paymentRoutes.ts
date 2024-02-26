import express from 'express';
import { PaymentController } from '../controllers/paymentController'; // Import your PaymentController

const router = express.Router();
const paymentController = new PaymentController(); // Create an instance of PaymentController

// Define routes
router.post('/create-payment-intent', paymentController.createPaymentIntent);
router.post('/confirm-payment-intent', paymentController.confirmPaymentIntent);

export default router;
