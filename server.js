const express = require('express');
const server = express();
const dotenv = require('dotenv').config();
const routes = require('./src/routes');

server.use(express.json());
//!----------------Banco de Dados--------------------
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
//!----------------Banco de Dados--------------------

server.listen(process.env.PORT);
console.log(`Instacia do servidor iniciado na porta ${process.env.PORT}.`);
server.use(routes);
