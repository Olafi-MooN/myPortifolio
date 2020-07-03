const fs = require('fs');
const login = require('./login.json');
var confirmar = false;

exports.get = (req, res) => {
    res.render('login') 
}

exports.post = (req, res) => {
    const { user, password } = req.body;

    if (user === login.user && password === login.password) {
        confirmar = true;
        return (
            confirmar,
            exports.confirmation = confirmar,
            res.render('mainProjetos')
        )
    }
    return res.send('Usuario e senha incorretos');
}

exports.postLogin = (req, res) => {
    fs.writeFile('login.json', JSON.stringify(req.body, null, 2), function(err){
        if (err) return res.send('Ocorreu um erro na troca de senha')
    })
    return res.send('Senha alterada com sucesso!')
}