'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.belongsTo(models.Users, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  };
  Orders.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    description: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    catererName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orderStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    orderCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING,
      defaultValue: null
    }
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};