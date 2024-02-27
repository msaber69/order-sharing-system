import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

export interface OrderAttributes {
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

class Order extends Model<OrderAttributes> {}

Order.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerPhone: {
      type: DataTypes.STRING,
    },
    products: {
      type: DataTypes.JSON, 
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    parkId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alleyNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Order',
    tableName: 'orders', 
  }
);

export { Order };
