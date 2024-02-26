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
      status: 'received',
      timestamp: order.timestamp
    };
    this.backofficeOrders.push(backofficeOrder);
    return backofficeOrder;
  }

  getBackofficeOrdersByParkId(parkId: string): BackofficeOrder[] {
    return this.backofficeOrders.filter(order => order.parkId === parkId);
  }

  getAllBackofficeOrders(): BackofficeOrder[] {
    return this.backofficeOrders;
  }

  getBackofficeOrderById(orderId: string): BackofficeOrder | undefined {
    return this.backofficeOrders.find(order => order.id === orderId);
  }

  updateBackofficeOrder(orderId: string, updatedOrderData: Partial<BackofficeOrder>): BackofficeOrder | undefined {
    const orderIndex = this.backofficeOrders.findIndex(order => order.id === orderId);
    if (orderIndex !== -1) {
      this.backofficeOrders[orderIndex] = { ...this.backofficeOrders[orderIndex], ...updatedOrderData };
      return this.backofficeOrders[orderIndex];
    }
    return undefined;
  }

  deleteBackofficeOrder(orderId: string): boolean {
    const initialLength = this.backofficeOrders.length;
    this.backofficeOrders = this.backofficeOrders.filter(order => order.id !== orderId);
    return this.backofficeOrders.length !== initialLength;
  }
}
