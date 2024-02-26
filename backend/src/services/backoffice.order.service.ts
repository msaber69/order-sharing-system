import { BackofficeOrder } from '../models/BackofficeOrder';
import { Order } from '../models/Order'; 

export class BackofficeOrderService {
  private backofficeOrders: BackofficeOrder[] = [];

  sendOrderToBackoffice(order: Order): BackofficeOrder {
    // Map order to backoffice order and send to backoffice
    const backofficeOrder: BackofficeOrder = {
      id: order.id,
      customerId: order.customerId,
      products: order.products,
      totalAmount: order.totalAmount,
      parkId: order.parkId,
      alleyNumber: order.alleyNumber,
      status: 'received', // Initial status
      timestamp: order.timestamp
    };
    this.backofficeOrders.push(backofficeOrder);
    return backofficeOrder;
  }

  getBackofficeOrdersByParkId(parkId: string): BackofficeOrder[] {
    return this.backofficeOrders.filter(order => order.parkId === parkId);
  }
}
