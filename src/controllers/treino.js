module.exports = {
  async index(request, response) {
    const data = request.body;

    let mensagem = '';

    if (data.sexo == 'M') {
      mensagem = 'Seu treino é de ganhar massa muscular';
    } else {
      mensagem = 'Seu treino é para modelar o corpo';
    }

    let imc = data.peso / (data.altura ^ 2);

    response.json(`${mensagem} - seu IMC=${imc}`);
  },

  async store(request, response) {},
};
