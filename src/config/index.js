require('dotenv').config();

const ENV = process.env;

const config = {
  port: Number.parseInt(ENV.PORT, 10) || 3000,
  logLevel: ENV.LOG_LEVEL || 'info',
};

module.exports = config;
