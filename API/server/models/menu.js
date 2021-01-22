'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Menu.belongsTo(models.Caterers, {
        foreignKey: 'catererId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  Menu.init({
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
    catererName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING,
      defaultValue: null
    }
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};