const { Schema, model } = require('mongoose');

const ProdutoSchema = new Schema({});

module.exports = model('Produto', ProdutoSchema);
