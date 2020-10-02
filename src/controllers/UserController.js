const User = require('../model/SessionModel');

module.exports = {
  async index(request, response) {},

  async store(request, response) {
    const { email, senha, nome, cargo } = request.body;
    const dataUser = await User.create({
      email,
      senha,
      nome,
      cargo,
    });

    return response.json(dataUser);
  },
  
  async validateUser(request, response) {
    const { email, senha } = request.body;
    const userValidate = await User.findOne({ email, senha });

    return response.json(userValidate);
  },

  async update(request, response) {},

  async delete(request, response) {},
};
