import { MakeNullishOptional } from 'sequelize/types/utils';
import Stripe from 'stripe';

interface PaymentIntent {
    id: string;
    amount: number;
    currency: string;
    description: string | null;
    clientSecret: string | null;
}

export class PaymentService {
    private stripe: Stripe;

    constructor(secretKey: string) {
        this.stripe = new Stripe(secretKey, { apiVersion: '2023-10-16' });
    }

    async createPaymentIntent(amount: number, currency: string, description: string): Promise<PaymentIntent | null> {
        try {
            const paymentIntent = await this.stripe.paymentIntents.create({
                amount,
                currency,
                description,
            });
            return {
                id: paymentIntent.id,
                amount: paymentIntent.amount,
                currency: paymentIntent.currency,
                description: paymentIntent.description,
                clientSecret: paymentIntent.client_secret,
            };
        } catch (error) {
            console.error('Error creating payment intent:', error);
            return null;
        }
    }

    async confirmPaymentIntent(paymentIntentId: string): Promise<string> {
        try {
            const paymentIntent = await this.stripe.paymentIntents.confirm(paymentIntentId);
            return paymentIntent.status;
        } catch (error) {
            console.error('Error confirming payment intent:', error);
            throw error;
        }
    }
}
