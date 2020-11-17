const { customerModel } = require('../modules/database');

const createCustomer = async (customerDto) => {
  return customerModel.create(customerDto);
};

module.exports = {
  createCustomer,
}