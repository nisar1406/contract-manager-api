const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contracts', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vendorname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    categoryname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cost: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    enddate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fk_user: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'email'
      }
    },
    fk_vendor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vendor',
        key: 'id'
      }
    },
    fk_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'contracts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "contracts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
