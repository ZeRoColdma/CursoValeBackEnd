const express = require('express');
const server = express();
require('./.env');
const routes = require('./src/routes');

server.use(express.json());

const port = 3333;

server.listen(port);
console.log(`Instacia do servidor iniciado na porta.`, port);
server.use(routes);
