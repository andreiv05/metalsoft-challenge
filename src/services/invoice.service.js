const { invoiceModel } = require('../modules/database');

const findAll = async () => {
  return invoiceModel.findAll();
}

const findOne = async () => {
  return invoiceModel.findOne();
}

const createInvoice = async (invoiceDto) => {
  return invoiceModel.create(invoiceDto);
};

const update = async (invoiceDto) => {
  const {
    id,
    ...customerProperties
  } = invoiceDto;
  return invoiceModel.update(customerProperties, { where: { id } });
};

const destroy = async (invoiceDto) => {
  const {
    id
  } = invoiceDto;
  return invoiceModel.destroy({ where: { id } });
};

module.exports = {
  createInvoice,
  findAll,
  update,
  destroy,
  findOne,
}