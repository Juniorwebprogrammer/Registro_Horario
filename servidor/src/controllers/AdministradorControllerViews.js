const getVistaPrincipal = (req, res) => {
    res.render('administrador/inicio.handlebars');
}

module.exports = {
    getVistaPrincipal
}