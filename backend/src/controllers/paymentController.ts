import { Request, Response } from 'express';
import { PaymentService } from '../services/payment.service';

export class PaymentController {
    private paymentService: PaymentService;

    constructor(secretKey: string) {
        this.paymentService = new PaymentService(secretKey);
    }

    async createPaymentIntent(req: Request, res: Response) {
        try {
            const { amount, currency, description } = req.body;
            const paymentIntent = await this.paymentService.createPaymentIntent(amount, currency, description);
            
            if (paymentIntent) {
                res.status(200).json({ clientSecret: paymentIntent.client_secret });
            } else {
                res.status(500).json({ error: 'An error occurred while creating payment intent' });
            }
        } catch (error) {
            console.error('Error creating payment intent:', error);
            res.status(500).json({ error: 'An error occurred while creating payment intent' });
        }
    }

    async confirmPaymentIntent(req: Request, res: Response) {
        try {
            const { paymentIntentId } = req.body;
            const paymentIntent = await this.paymentService.confirmPaymentIntent(paymentIntentId);
            
            if (paymentIntent) {
                res.status(200).json({ status: paymentIntent.status });
            } else {
                res.status(500).json({ error: 'An error occurred while confirming payment intent' });
            }
        } catch (error) {
            console.error('Error confirming payment intent:', error);
            res.status(500).json({ error: 'An error occurred while confirming payment intent' });
        }
    }
}
