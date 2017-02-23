'use strict';

module.exports = function (sequelize, DataTypes) {
  var Roles = sequelize.define('Roles', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        Roles.hasMany(models.Users, {
          foreignKey: 'roleId',
          as: 'users'
        });
      }
    }
  });
  return Roles;
};