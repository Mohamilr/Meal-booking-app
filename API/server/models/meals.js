'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Meals.belongsTo(models.Caterers, {
        foreignKey: 'catererId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    };
  };
  Meals.init({
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
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
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
    modelName: 'Meals',
  });
  return Meals;
};