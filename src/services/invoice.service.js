const { invoiceModel } = require('../modules/database');

const findAll = async () => {
  return invoiceModel.findAll();
}

const findOne = async (invoiceDto) => {
  return invoiceModel.findOne({ where: invoiceDto});
}

const createInvoice = async (invoiceDto) => {
  return invoiceModel.create(invoiceDto);
};

const update = async (invoiceDto) => {
  const {
    id,
    ...invoiceProperties
  } = invoiceDto;
  return invoiceModel.update(invoiceProperties, { where: { id } });
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