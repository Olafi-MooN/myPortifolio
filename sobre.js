const fs = require('fs');
const about = require('./sobre.json');

exports.get = (req, res) => {
    return res.render('about', { about });  
}

exports.post = (req, res) => {
    fs.writeFile("sobre.json", JSON.stringify(req.body, null, 2), function(err){
        if(err) return res.send('Ocooreu um erro');
        return res.render('addProjetos');
    })

    return res.send('Alterado com sucesso!')
}