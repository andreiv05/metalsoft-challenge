const crypto = require('crypto');
const NodeCache = require('node-cache');
const { cacheTTL } = require('../config');
const requestCache = new NodeCache();

const cachedMethods = [
  'customer_list',
  'customer_find',
  'invoice_list',
  'invoice_find',
]

const checkCache = async (opHash) => {
  return requestCache.get(opHash);
};


const insertCache = async (opHash, payload) => {
  return requestCache.set(opHash, payload, cacheTTL);
};


const requestCacheMiddleware = async (req, res, next) => {
  const { method } = req.body;

  if (cachedMethods.indexOf(method) === -1) {
    return next();
  }

  const bodyHash = crypto.createHash('md5').update(JSON.stringify(req.body)).digest('hex');
  const cachedResult = await checkCache(bodyHash);
  if (cachedResult) {
    req.log.debug('Server cached request');
    res.status(200);
    res.json(cachedResult);
  } else {
    return next();
  }
};

const postRequestCacheSave = async (req, res, next) => {
  const { responseObject } = res.locals;
  const bodyHash = crypto.createHash('md5').update(JSON.stringify(req.body)).digest('hex');
  insertCache(bodyHash, responseObject);
  return next();
}

module.exports = {
  requestCacheMiddleware,
  postRequestCacheSave,
};

