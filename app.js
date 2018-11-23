const joi = require('joi');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const routes = require('./routes/index');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
}

app.use(express.static('public'));
app.use('/api', routes);

module.exports = app;