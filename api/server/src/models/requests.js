'use strict';
module.exports = (sequelize, DataTypes) => {
  const requests = sequelize.define('requests', {
    active: DataTypes.BOOLEAN
  }, {});
  requests.associate = function(models) {
    // associations can be defined here
  };
  return requests;
};