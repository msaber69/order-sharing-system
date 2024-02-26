import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

export interface ProductAttributes {
  id: string;
  name: string;
  description: string;
  price: number;
  parkId: string;
  quantity: number;
}

class Product extends Model<ProductAttributes> {}

Product.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    parkId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Product',
    tableName: 'products', 
  }
);

export { Product };
