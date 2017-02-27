'use strict';

module.exports = function (sequelize, DataTypes) {
  var Types = sequelize.define('Types', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        Types.hasMany(models.Documents, {
          foreignKey: 'typeId',
          as: 'documents'
        });
        Types.belongsTo(models.Users, {
          foreignKey: 'ownerId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Types;
};