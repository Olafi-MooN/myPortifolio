const confirmation = require('./login');

exports.getProjetos = (req, res) =>  {
    if (confirmation.confirmation) return res.render('mainProjetos');
    return res.send('Você não realizou login');
}
exports.getAdd = (req, res) =>  {
    if (confirmation.confirmation) return res.render('addprojetos');
    return res.send('Você não realizou login');
}
exports.getAbout = (req, res) => {
    if (confirmation.confirmation) return res.render('addAbout');
    return res.send('Você não realizou login');
}
exports.getLogin = (req, res) => {
    if (confirmation.confirmation) return res.render('alterLogin');
    return res.send('Você não realizou login');
}
