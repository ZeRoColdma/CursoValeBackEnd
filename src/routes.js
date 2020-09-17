const express = require('express');
const routes = express.Router();
const dotenv = require('dotenv').config();

//!----------------Import de Controladores-----------
const ProdutoController = require('./controllers/ProdutoController');
//!----------------Import de Controladores-----------

routes.get('/produto', ProdutoController.index);
routes.post('/produto', ProdutoController.store);

module.exports = routes;
