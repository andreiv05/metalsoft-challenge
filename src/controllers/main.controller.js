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
      case 'customer_add':
        result = await customerService.createCustomer(params);
        break;
    
      default:
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