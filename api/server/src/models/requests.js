'use strict';
module.exports = (sequelize, DataTypes) => {
  const requests = sequelize.define('requests', {
    active: DataTypes.BOOLEAN,
    client: DataTypes.STRING,
    table: DataTypes.INTEGER,
    request: DataTypes.STRING,
    qntd: DataTypes.INTEGER
  }, {});
  requests.associate = function (models) {
    menu.hasMany(models.requests)
  };
  return requests;
};