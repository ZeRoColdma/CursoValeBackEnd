const Produto = require('../model/ProdutoModel');
const mongoose = require('mongoose');

module.exports = {
  async index(request, response) {
    const { page } = request.query;
    const produtos = await Produto.paginate({}, { page, limit: 5 });

    return response.json(produtos);
  },

  async store(request, response) {
    const data = request.body;

    const produtos = await Produto.create(data);

    return response.json(produtos);
  },

  async show(request, response) {
    const codProduto = request.params.codigoProduto;
    const responseProduto = await Produto.findById(codProduto);

    response.json(responseProduto);
  },

  async update(request, response) {
    const codigoProduto = request.params.codigoProduto;
    const upDateProduto = request.body;

    const responseUpdate = await Produto.findByIdAndUpdate(
      codigoProduto,
      upDateProduto,
      { new: true, useFindAndModify: false },
    );

    response.json(responseUpdate);
  },

  async delete(request, response) {
    const codigoProduto = request.params.codigoProduto;
    const dateDelete = await Produto.findByIdAndDelete(codigoProduto);

    response.json(dateDelete);
  },

  async findName(request, response) {
    const descricao = request.params.descricao;

    const filtro = await Produto.find({ descricao });

    return response.json(filtro);
  },
};
