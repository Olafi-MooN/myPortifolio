const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const server = express();
server.use(express.urlencoded({extended: true}))
server.set('view engine', 'njk');
server.use(express.static('Public'));
server.use(routes);

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true,
})

server.listen(process.env.PORT || 5000)