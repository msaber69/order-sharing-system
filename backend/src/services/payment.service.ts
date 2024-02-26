import { Payment } from '../models/Payment';

export class PaymentService {
  private payments: Payment[] = [];

  processPayment(orderId: string, amount: number): Payment {
    // Simulate processing payment
    const id = Math.random().toString(36).substr(2, 9);
    const payment: Payment = {
      id,
      orderId,
      amount,
      status: 'completed', // Simulating successful payment
      timestamp: new Date()
    };
    this.payments.push(payment);
    return payment;
  }
}
