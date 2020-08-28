'use strict';
module.exports = (sequelize, DataTypes) => {
  const products_order = sequelize.define('products_order', {
    menu: DataTypes.INTEGER
  }, {});
  products_order.associate = function(models) {
    // associations can be defined here
  };
  return products_order;
};