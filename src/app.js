const server = require('./modules/server');
const logger = require('./modules/logger');
const { database } = require('./modules/database');
const config = require('./config');

const init = async () => {
  
  try {
    await database.authenticate();
    await database.sync({});
    logger.info('Database connection established');
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }

  server.listen(config.port, () => {
    logger.info(
      {
        port: config.port,
        process_pid: process.pid,
      },
      'Server started',
    );
  });
}

init();