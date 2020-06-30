const express = require('express');
const routes = express.Router();
const projetos = require('./projetos');
const sobre = require('./sobre');
const login = require('./login');

routes.get('/', sobre.get);
routes.post('/', sobre.post);

routes.get('/projetos', projetos.get);
routes.post('/projetos', projetos.post);

routes.get('/addProjetos', projetos.getProjetos);
routes.get('/addProjetos/projetos', projetos.getAdd);
routes.get('/addProjetos/sobre', projetos.getAbout);

routes.get('/projetos/modal', projetos.modal);

routes.get('/login', login.get);
routes.post('/login', login.post);
routes.get('/login/alterarSenha', login.getLogin);
routes.post('/login/alterarSenha', login.postLogin);

module.exports = routes;