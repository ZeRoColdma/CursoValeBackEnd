const mongoose = require('../database/index');

const ProdutoSchema = new mongoose.Schema({
  descricao: { type: String },
  peso: {
    type: String,
    required: false,
  },
  image: {
    type: String,
  },
  fabricante: { type: String },
  quantidade: { type: Number },
  preco: { type: Number },
});

const Produtos = mongoose.model('Produto', ProdutoSchema);

module.exports = Produtos;
