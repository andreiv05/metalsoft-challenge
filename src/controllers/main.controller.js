const logger = require('../modules/logger');

const customerService = require('../services/customer.service');
const invoiceService = require('../services/invoice.service');

const process = async (req, res, next) => {
  const {
    method,
    params,
    id,
  } = req.body;


  let result = null;
  try {
    switch (method) {
      case 'customer_list':
        result = await customerService.findAll();
        break;
      case 'customer_add':
        result = await customerService.createCustomer(params);
        break;
      case 'customer_find':
        result = await customerService.findOne(params);
        break;
      case 'customer_update':
        result = await customerService.update(params);
        break;
      case 'customer_delete':
        result = await customerService.destroy(params);
        break;

      case 'invoice_list':
        result = await invoiceService.findAll();
        break;
      case 'invoice_add':
        result = await invoiceService.createInvoice(params);
        break;
      case 'invoice_find':
        result = await invoiceService.findOne(params);
      case 'invoice_update':
        result = await invoiceService.update(params);
        break;
      case 'invoice_delete':
        result = await invoiceService.destroy(params);
        break;
    }
  } catch (err) {
    req.log.error(err);
    result = "Server error";
  }
  

  res.status(200);
  res.json({
    jsonrpc: '2.0',
    result,
    id
  });
  return next();
};

module.exports = process;