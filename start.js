require('dotenv').config({
  path: 'variables.env',
});

const mongoose = require('mongoose');
const debug = require('debug')('myapp');
const chalk = require('chalk');

async function connectMongo() {
  try {
    await mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
    debug('Connected to mongo...');
  } catch (err) {
    console.log(`Couldn't connected to mongodb.. ${err}`);
  }
}

connectMongo();

const port = process.env.PORT || 5000;
const app = require('./app');

app.listen(port, () => {
  debug(`Server is listening on port ${chalk.yellow(port)}`);
});

