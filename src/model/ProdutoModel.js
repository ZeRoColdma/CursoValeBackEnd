const mongoose = require('../database/index');
const mongoosePaginate = require('mongoose-paginate');

const ProdutoSchema = new mongoose.Schema(
  {
    descricao: { type: String },
    peso: {
      type: String,
      required: false,
    },
    unidade: {
      type: String,
    },
    image: {
      type: String,
    },
    fabricante: { type: String },
    quantidade: { type: Number },
    preco: { type: Number },
  },
  { timestamps: true },
);
//!Paginação De Dados
ProdutoSchema.plugin(mongoosePaginate);

const Produtos = mongoose.model('Produto', ProdutoSchema);
module.exports = Produtos;
