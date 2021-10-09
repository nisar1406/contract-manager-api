var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _contracts = require("./contracts");
var _users = require("./users");
var _vendors = require("./vendors");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var contracts = _contracts(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var vendor = _vendors(sequelize, DataTypes);

  contracts.belongsTo(categories, { as: "fk_category_category", foreignKey: "fk_category"});
  categories.hasMany(contracts, { as: "contracts", foreignKey: "fk_category"});
  contracts.belongsTo(users, { as: "fk_user_user", foreignKey: "fk_user"});
  users.hasMany(contracts, { as: "contracts", foreignKey: "fk_user"});
  categories.belongsTo(vendor, { as: "fk_vendor_vendor", foreignKey: "fk_vendor"});
  vendor.hasMany(categories, { as: "categories", foreignKey: "fk_vendor"});
  contracts.belongsTo(vendor, { as: "fk_vendor_vendor", foreignKey: "fk_vendor"});
  vendor.hasMany(contracts, { as: "contracts", foreignKey: "fk_vendor"});

  return {
    categories,
    contracts,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
