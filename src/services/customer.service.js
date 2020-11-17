const { customerModel } = require('../modules/database');

const findAll = async () => {
  return customerModel.findAll();
}

const findOne = async () => {
  return customerModel.findOne();
}

const createCustomer = async (customerDto) => {
  return customerModel.create(customerDto);
};

const update = async (customerDto) => {
  const {
    id,
    ...customerProperties
  } = customerDto;
  return customerModel.update(customerProperties, { where: { id } });
};

const destroy = async (customerDto) => {
  const {
    id
  } = customerDto;
  return customerModel.destroy({ where: { id } });
};

module.exports = {
  createCustomer,
  findAll,
  update,
  destroy,
  findOne,
}