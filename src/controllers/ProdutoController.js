const Produto = require('../model/ProdutoModel');

module.exports = {
  async index(request, response) {
    response.json({
      Nome: 'Carlos',
      Produto: 'Guitarra',
      Valor: 12000,
    });
  },

  async store(request, response) {},

  async update(request, response) {},

  async delete(request, response) {},
};
