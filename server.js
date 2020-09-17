const express = require('express');
const server = express();
const dotenv = require('dotenv').config();
const routes = require('./src/routes');

server.use(express.json());

server.listen(process.env.PORT);
console.log(`Instacia do servidor iniciado na porta ${process.env.PORT}.`);
server.use(routes);
