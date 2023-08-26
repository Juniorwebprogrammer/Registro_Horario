const HistoricosDB = require('../database/Historico');

const getAllHistoricos = async () => {
    const allHistoricos = await HistoricosDB.getAllHistoricos()
    return allHistoricos;
}

const getOneHistórico = async (idHistorico) => {
    const oneHistórico = await HistoricosDB.getOneHistorico(idHistorico);
    return oneHistórico;
}

module.exports = {
    getAllHistoricos,
    getOneHistórico
}