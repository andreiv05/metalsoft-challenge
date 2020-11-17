const express = require('express');
const bodyParser = require('body-parser');
const bunyanMiddleware = require('bunyan-middleware');

const logger = require('../modules/logger');
const mainController = require('../controllers/main.controller');
const app = express();

app.use(bunyanMiddleware(
  logger,
));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
  res.send({ pong: true });
});
app.post('/query', mainController);

module.exports = app;
