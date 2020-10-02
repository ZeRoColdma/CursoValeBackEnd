const express = require('express');
const routes = express.Router();

//!----------------Import de Controladores-----------
const ProdutoController = require('./controllers/ProdutoController');
const UserController = require('./controllers/UserController');
//!----------------Import de Controladores-----------

//!----------------Rotas de produto------------------
routes.get('/produtos', ProdutoController.index);
routes.get('/produtosindex', ProdutoController.showProdutos);
routes.get('/produtos_id/:codigoProduto', ProdutoController.show);
routes.get('/filterProduto/:descricao', ProdutoController.findName);

routes.post('/produtos', ProdutoController.store);
routes.post('/produtos_id/:codigoProduto', ProdutoController.update);
routes.delete('/produtos_id/:codigoProduto', ProdutoController.delete);
//!----------------Rotas de produto------------------

//!----------------Rotas Usuarios--------------------
routes.post('/novousuario', UserController.store);
routes.post('/loginusuario', UserController.validateUser);
//!----------------Rotas Usuarios--------------------

module.exports = routes;
