const Produto = require('../model/ProdutoModel');

module.exports = {
  async index(request, response) {
    const produtos = await Produto.find();

    return response.json(produtos);
  },

  async store(request, response) {
    const data = request.body;

    const produtos = await Produto.create(data);

    return response.json(produtos);
  },
};
