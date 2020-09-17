const express = require('express');
const routes = express.Router();
const dotenv = require('dotenv').config();

//!----------------Import de Controladores-----------
const ProdutoController = require('./controllers/ProdutoController');

//!----------------Import de Controladores-----------

routes.get('/', ProdutoController.index);

module.exports = routes;
