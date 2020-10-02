const mongoose = require('mongoose');
require('../../.env');

mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
