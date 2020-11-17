const Sequelize = require('sequelize');
const customerModelInitializer = require('../models/customer.model');
const invoiceModelInitializer = require('../models/invoice.model');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `${__dirname}/../../database.sqlite`,
});

const customerModel = customerModelInitializer(sequelize, Sequelize);
const invoiceModel = invoiceModelInitializer(sequelize, Sequelize);

customerModel.hasMany(invoiceModel, { as: 'invoices' });
invoiceModel.belongsTo(customerModel, {
  foreignKey: 'customerId',
  as: 'customer',
});



module.exports = {
  database: sequelize,
  customerModel,
  invoiceModel,
};
