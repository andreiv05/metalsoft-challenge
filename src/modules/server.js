const express = require('express');
const bodyParser = require('body-parser');
const bunyanMiddleware = require('bunyan-middleware');
const middlewares = require('../middlewares/cache');

const logger = require('../modules/logger');
const mainController = require('../controllers/main.controller');
const app = express();

app.use(bunyanMiddleware(
  logger,
));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(middlewares.requestCacheMiddleware);
app.post('/query', mainController);
app.use(middlewares.postRequestCacheSave);

module.exports = app;
