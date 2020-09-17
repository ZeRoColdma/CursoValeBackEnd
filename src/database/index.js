const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
