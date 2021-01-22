'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      size: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isUrl: true
        }
      },
      description: {
        type: Sequelize.STRING,
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      catererName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orderStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      orderCount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      currency: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};