const ConsultaEspecificaDB = require('../database/ConsultaEspecifica');

const getConsultaDateTime = async() => {
    const consultaDateTime = await ConsultaEspecificaDB.getDateTime();
    return consultaDateTime;
}

module.exports = {
    getConsultaDateTime
}