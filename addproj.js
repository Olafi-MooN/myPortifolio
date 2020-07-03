const confirmation = require('./login');

exports.getProjetos = (req, res) =>  {
    if (confirmation.confirmation){
        return res.render('mainProjetos');
    }else{
        return res.send('Você não realizou login');
    }
}
exports.getAdd = (req, res) =>  {
    if (confirmation.confirmation) {
        return res.render('addprojetos');
    }else{
        return res.send('Você não realizou login');
    }
}
exports.getAbout = (req, res) => {
    if (confirmation.confirmation) {
        return res.render('addAbout');
    }else{
        return res.send('Você não realizou login');
    }
}
exports.getLogin = (req, res) => {
    if (confirmation.confirmation) {
        return res.render('alterLogin');
    }else{
        return res.send('Você não realizou login');
    }
}
