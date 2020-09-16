const { response } = require('express');
const express = require('express');
const routes = express.Router();

//!import de controladores
const TreinoController = require('./src/controllers/treino');

//!Rotas
routes.get('/', (request, response) => {
  response.json({ BoasVindas: 'Servidor Rodando' });
});

routes.get('/cursos', (request, response) => {
  response.json({
    Web: 'React.JS',
    Mobile: 'React Native',
    Datascience: 'TensorFlow',
  });
});

routes.post('/cursos', (request, response) => {
  const data = request.body;
  response.json(data);
});

routes.post('/alunos', (request, response) => {
  const data = request.body;
  response.json({ data });
});

//!Parametros da reque pela URL
routes.post('/prog/:nome', (request, response) => {
  const progs = request.params.nome;
  response.send(progs);
});

routes.post('/diretoria', (request, response) => {
  const nome = request.query.nome;
  const idade = request.query.idade;
  const sexo = request.query.sexo;
  response.send(
    'Seu nome é: ' + nome + ' e sua idade é: ' + idade + ' do sexo: ' + sexo,
  );
});

routes.post('/matricula', TreinoController.index);

module.exports = routes;
