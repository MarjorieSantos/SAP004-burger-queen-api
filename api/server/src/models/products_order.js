'use strict';
module.exports = (sequelize, DataTypes) => {
  const products_order = sequelize.define('products_order', {
    menu: DataTypes.INTEGER,
    name: DataTypes.STRING,
    qntd: DataTypes.INTEGER,
    orders_id: DataTypes.INTEGER,
    request_id: DataTypes.INTEGER
  }, {});
  products_order.associate = function (models) {
    menu.hasMany(models.products_order);
    products_order.belongsTo(models.requests)
    products_order.belongsTo(models.orders)
  };
  return products_order;
};