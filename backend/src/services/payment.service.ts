import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51Oo9XUEzFTNbZPpRszO62lmamCRs8Sg2TXhi3NQZAB7zPqh49UsF7QTZoYaL6D1s7dVVR2IKRQ4TlTWYr5GrZMep00NzPLgHnw');

export class PaymentService {
    private stripe: Stripe;

    constructor(secretKey: string) {
        this.stripe = new Stripe(secretKey, {
            apiVersion: '2023-10-16',
        });
    }

    async createPaymentIntent(amount: number, currency: string, description: string): Promise<Stripe.PaymentIntent | null> {
        try {
            const paymentIntent = await this.stripe.paymentIntents.create({
                amount,
                currency,
                description,
            });
            return paymentIntent;
        } catch (error) {
            console.error('Error creating payment intent:', error);
            return null;
        }
    }

    async confirmPaymentIntent(paymentIntentId: string): Promise<Stripe.PaymentIntent | null> {
        try {
            const paymentIntent = await this.stripe.paymentIntents.confirm(paymentIntentId);
            return paymentIntent;
        } catch (error) {
            console.error('Error confirming payment intent:', error);
            return null;
        }
    }
}
