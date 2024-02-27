import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

export interface BackofficeOrderAttributes {
  id: string;
  orderId: string;
  customerId: string;
  products: string[];
  totalAmount: number;
  parkId: string;
  alleyNumber: number;
  status: 'received' | 'processed' | 'shipped' | 'delivered' | 'cancelled';
  timestamp: Date;
}

class BackofficeOrder extends Model<BackofficeOrderAttributes> {}

BackofficeOrder.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    orderId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.ENUM('received', 'processed', 'shipped', 'delivered', 'cancelled'),
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
    modelName: 'BackofficeOrder',
    tableName: 'backoffice_orders', 
  }
);

export { BackofficeOrder };
