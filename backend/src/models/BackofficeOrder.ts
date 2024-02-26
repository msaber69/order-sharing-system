export interface BackofficeOrder {
    id: string;
    customerId: string;
    products: string[]; 
    totalAmount: number;
    parkId: string;
    alleyNumber: number;
    status: 'received' | 'processing' | 'completed';
    timestamp: Date;
  }
  