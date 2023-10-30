const ConsultaEspecificaServices = require('../services/ConsultaEspecificaServices');

const getVistaConsulta = (req, res) => {
    res.render('consultaEspecifica/consulta.handlebars');
}

// const getConsultaDateTime = (req, res) => {}

module.exports = {
    getVistaConsulta
    //getConsultaDateTime
}