const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    email: { type: String, require: true },
    senha: {
      type: String,
      require: true,
    },
    nome: { type: String, require: true },
    cargo: String,
  },
  { timestamps: true },
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
