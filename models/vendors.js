const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendors', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'vendors',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "vendors_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
