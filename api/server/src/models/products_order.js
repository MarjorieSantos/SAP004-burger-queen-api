'use strict';
module.exports = (sequelize, DataTypes) => {
  const products_order = sequelize.define('products_orders', {
    name: DataTypes.STRING,
    count: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    isBurger: DataTypes.BOOLEAN,
    option: DataTypes.BOOLEAN
  }, {});
  products_order.associate = function (models) {
    // associations can be defined here
  };
  return products_order;
};