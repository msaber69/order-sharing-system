import { Request, Response } from 'express';
import Stripe from 'stripe';
import { PaymentService } from '../services/payment.service';

export class PaymentController {
    private paymentService: PaymentService;
    private stripe: Stripe;

    constructor(secretKey: string) {
        this.paymentService = new PaymentService(secretKey);
        this.stripe = new Stripe(secretKey, {
            apiVersion: '2023-10-16',
        });
    }

    async createPaymentIntent(req: Request, res: Response) {
        try {
            const { amount, currency, description } = req.body;
            const paymentIntent = await this.stripe.paymentIntents.create({
                amount,
                currency,
                description,
            });
            res.status(200).json({ clientSecret: paymentIntent.client_secret });
        } catch (error) {
            console.error('Error creating payment intent:', error);
            res.status(500).json({ error: 'An error occurred while creating payment intent' });
        }
    }

    async confirmPaymentIntent(req: Request, res: Response) {
        try {
            const { paymentIntentId } = req.body;
            const paymentIntent = await this.stripe.paymentIntents.confirm(paymentIntentId);
            res.status(200).json({ status: paymentIntent.status });
        } catch (error) {
            console.error('Error confirming payment intent:', error);
            res.status(500).json({ error: 'An error occurred while confirming payment intent' });
        }
    }
}
