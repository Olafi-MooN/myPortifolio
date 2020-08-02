const express = require('express');
const routes = express.Router();
const projetos = require('./projetos');
const sobre = require('./sobre');
const login = require('./login');
const addproj = require('./addproj');
const artigos = require('./artigos')

routes.get('/', sobre.get);
routes.post('/', sobre.post);

routes.get('/projetos', projetos.get);
routes.post('/projetos', projetos.post);

routes.get('/addProjetos', addproj.getProjetos);
routes.get('/adicionarProjetos', addproj.getAdd);
routes.get('/addProjetos/sobre', addproj.getAbout);

routes.get('/projetos/modal', projetos.modal);

routes.get('/login', login.get);
routes.post('/login', login.post);
routes.get('/login/alterarSenha', addproj.getLogin);
routes.post('/login/alterarSenha', login.postLogin);

routes.get('/artigos', artigos.get);
routes.get('/articles/:id', artigos.getArticle);

module.exports = routes;