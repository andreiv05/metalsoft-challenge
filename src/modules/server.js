const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
  res.send({ pong: true });
});

module.exports = app;