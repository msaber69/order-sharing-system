import { Order } from '../models/Order';
import { Product } from '../models/Product';

export class OrderService {
  private orders: Order[] = [];

  createOrder(newOrder: Order): Order {
    // Generate a unique ID for the order
    const id = Math.random().toString(36).substring(2, 9);
    const orderWithId: Order = { ...newOrder, id, status: 'pending', timestamp: new Date() };
    this.orders.push(orderWithId);
    return orderWithId;
  }

  getOrderById(orderId: string): Order | undefined {
    return this.orders.find(order => order.id === orderId);
  }

  getAllOrders(): Order[] {
    return this.orders;
  }

  getOrdersByParkId(parkId: string): Order[] {
    return this.orders.filter(order => order.parkId === parkId);
  }

  updateOrder(orderId: string, updatedOrderData: Partial<Order>): Order | undefined {
    const orderIndex = this.orders.findIndex(order => order.id === orderId);
    if (orderIndex !== -1) {
      this.orders[orderIndex] = { ...this.orders[orderIndex], ...updatedOrderData };
      return this.orders[orderIndex];
    }
    return undefined;
  }

  /*calculateTotalAmount(products: Product[]): number {
    // Calculate subtotal for each product
    const subtotals = products.map(product => product.price * product.quantity);

    // Calculate total subtotal
    const totalSubtotal = subtotals.reduce((acc, subtotal) => acc + subtotal, 0);

    // Apply taxes and fees (if applicable)
    const taxesAndFees = 0; // Placeholder for taxes and fees

    // Calculate total amount
    const totalAmount = totalSubtotal + taxesAndFees;

    return totalAmount;
  }*/
}
