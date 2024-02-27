import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

export interface SessionAttributes {
  id: string;
  alleyNumber: number;
  qrCode: string;
  startTime: Date;
  endTime?: Date;
}

class Session extends Model<SessionAttributes> {}

Session.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    alleyNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qrCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Session',
    tableName: 'sessions',
  }
);

export { Session };
