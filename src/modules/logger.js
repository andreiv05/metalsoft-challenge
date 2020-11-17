const bunyan = require('bunyan');
const config = require('../config');

const logger = bunyan.createLogger({
  name: 'retrics-api',
  level: config.logLevel,
  serializers: bunyan.stdSerializers,
});

module.exports = logger;
