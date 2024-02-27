import { BackofficeOrder, BackofficeOrderAttributes } from '../models/BackofficeOrder';

export class BackofficeOrderService {
  async sendOrderToBackoffice(order: BackofficeOrderAttributes): Promise<BackofficeOrder | null> {
    try {
      const backofficeOrder = await BackofficeOrder.create(order);
      return backofficeOrder;
    } catch (error) {
      throw new Error('Error sending order to backoffice');
    }
  }

  async getBackofficeOrdersByParkId(parkId: string): Promise<BackofficeOrder[]> {
    try {
      const orders = await BackofficeOrder.findAll({ where: { parkId } });
      return orders;
    } catch (error) {
      throw new Error('Error retrieving backoffice orders by park ID');
    }
  }

  async getAllBackofficeOrders(): Promise<BackofficeOrder[]> {
    try {
      const orders = await BackofficeOrder.findAll();
      return orders;
    } catch (error) {
      throw new Error('Error retrieving all backoffice orders');
    }
  }

  async getBackofficeOrderById(orderId: string): Promise<BackofficeOrder | null> {
    try {
      const order = await BackofficeOrder.findByPk(orderId);
      return order;
    } catch (error) {
      throw new Error('Error retrieving backoffice order by ID');
    }
  }

  async updateBackofficeOrder(orderId: string, updatedOrderData: Partial<BackofficeOrderAttributes>): Promise<BackofficeOrder | null> {
    try {
      const order = await BackofficeOrder.findByPk(orderId);
      if (!order) {
        throw new Error('Backoffice order not found');
      }
      await order.update(updatedOrderData);
      return order;
    } catch (error) {
      throw new Error('Error updating backoffice order');
    }
  }

  async deleteBackofficeOrder(orderId: string): Promise<boolean> {
    try {
      const order = await BackofficeOrder.findByPk(orderId);
      if (!order) {
        throw new Error('Backoffice order not found');
      }
      await order.destroy();
      return true;
    } catch (error) {
      throw new Error('Error deleting backoffice order');
    }
  }
}
