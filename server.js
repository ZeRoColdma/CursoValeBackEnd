const express = require('express');
const routes = require('./src/routes');
const server = express();
const cors = require('cors');

server.use(express.json());
server.use(routes);
server.use(cors());

port = process.env.PORT || 3333;

server.listen(port);
