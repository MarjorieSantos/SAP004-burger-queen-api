'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products_orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menu: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      qntd: {
        type: Sequelize.INTEGER
      },
      orders_id: {
        type: Sequelize.INTEGER
      },
      request_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      menuId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'orders', key: 'id' }
      },

      orderId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'requests', key: 'id' }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products_orders');
  }
};