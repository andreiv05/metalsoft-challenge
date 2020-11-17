const server = require('./modules/server');
const logger = require('./modules/logger');
const config = require('./config');


server.listen(config.port, () => {
  logger.info(
    {
      port: config.port,
      process_pid: process.pid,
    },
    'Server started',
  );
});