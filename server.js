const express = require('express');
const server = express();
const dotenv = require('dotenv').config();
const routes = require('./routes');
//const cors = require('cors');

server.listen(process.env.PORT);
console.log(`Instacia do servidor iniciado na porta ${process.env.PORT}.`);

server.use(express.json());
//server.use(cors);
server.use(routes);
