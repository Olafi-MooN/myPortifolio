const fs = require('fs');
const data = require('./data.json');

exports.get = (req, res) => res.render('projetos', { projetos: data.projects });

exports.getProjetos = (req, res) =>  res.render('mainProjetos');
exports.getAdd = (req, res) =>  res.render('addProjetos');
exports.getAbout = (req, res) => res.render('addAbout');

exports.post = (req, res) => {
    const keys = Object.keys(req.body);
    for(key of keys){
        if (req.body[key] == '') return res.send('Preencha todos os campos')
    }

    req.body.id = data.projects.length + 1;
    data.projects.push(req.body);

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('Ocorreu um erro');
        return res.render('projetos',  { projetos: data.projects });
    })
}

exports.modal = (req, res) => {
    const id = req.query.id
    const description = data.projects.find(function(description){
        if (description.id == id){
            return true;
        }
    })

    if(!description){
        return res.send('video não encontrado')
    }
    return res.render('description', { item: description })
}
