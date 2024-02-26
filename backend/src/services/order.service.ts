import { Order } from '../models/Order';

export class OrderService {
  constructor() {}

  async createOrder(orderData: {
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
  }): Promise<Order | null> {
    try {
      const order = await Order.create(orderData);
      return order;
    } catch (error) {
      throw new Error('Error creating order');
    }
  }
  

  async getOrderById(orderId: string): Promise<Order | null> {
    try {
      const order = await Order.findByPk(orderId);
      return order;
    } catch (error) {
      throw new Error('Error retrieving order by ID');
    }
  }

  async getAllOrders(): Promise<Order[]> {
    try {
      const orders = await Order.findAll();
      return orders;
    } catch (error) {
      throw new Error('Error retrieving all orders');
    }
  }

  async updateOrder(orderId: string, updatedOrderData: {
    customerId?: string;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    products?: string[];
    totalAmount?: number;
    parkId?: string;
    alleyNumber?: number;
    status?: 'pending' | 'completed' | 'cancelled';
    timestamp?: Date;
  }): Promise<Order | null> {
    try {
      const order = await Order.findByPk(orderId);
      if (!order) {
        throw new Error('Order not found');
      }
      await order.update(updatedOrderData);
      return order;
    } catch (error) {
      throw new Error('Error updating order');
    }
  }
  

  async deleteOrder(orderId: string): Promise<boolean> {
    try {
      const order = await Order.findByPk(orderId);
      if (!order) {
        throw new Error('Order not found');
      }
      await order.destroy();
      return true;
    } catch (error) {
      throw new Error('Error deleting order');
    }
  }

}
