import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

export interface UserAttributes {
  id: string;
  username: string;
  email: string;
  password: string;
}

class User extends Model<UserAttributes> {}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'User',
    tableName: 'users',
  }
);

export { User };
