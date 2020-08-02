const fs = require("fs")

exports.get = (req, res) => {
    fs.readdir("./views/artigos", (err, paths) => {
        var list = [];
        list = paths;

        console.log(list)
        list.forEach((item, index ) => {
            item.id = index;
            item.name = `${index}. ${item.name}`;
        })
        res.render('mainArtigos.njk', { list })
    })
}

exports.getArticle = (req, res) => {
    const id = req.params.id;

    fs.readdir("./views/artigos", (err, paths) => {
        const caminho ='';
        console.log(paths);
        return res.render(`artigos/${paths[id]}`)
    })
}