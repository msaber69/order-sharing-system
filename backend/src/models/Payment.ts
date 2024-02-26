export interface Payment {
    id: string;
    orderId: string;
    amount: number;
    status: 'pending' | 'completed' | 'failed';
    timestamp: Date;
  }
  