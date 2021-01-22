'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Caterers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Caterers.hasMany(models.Meals, {
        foreignKey: 'catererId',
        as: 'meals'
      })
    }
  };
  Caterers.init({
    firstName:{
      type:  DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      unique: true,
      defaultValue: null
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    profilePicture: {
      type: DataTypes.STRING,
      defaultValue: null,
      validate: {
        isUrl: true
      }
    },
    Authenticated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false  
    }
  }, {
    sequelize,
    modelName: 'Caterers',
  });
  return Caterers;
};