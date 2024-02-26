export interface Order {
    id: string;
    customerId: string;
    customerName: string; 
    customerEmail: string; 
    customerPhone?: string; 
    products: string[]; 
    totalAmount: number;
    parkId: string;
    alleyNumber: number;
    status: 'pending' | 'completed' | 'cancelled';
    timestamp: Date;
  }
  