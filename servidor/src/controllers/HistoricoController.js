const HistoricoServices = require('../services/HistoricoService');

const getAllHistorico = async (req,res) => {
    const allHistorico = await HistoricoServices.getAllHistoricos();

    res.status(200).send(allHistorico)
}

const getOneHistorico = async (req,res) => {
    const {idHistorico} = req.params;

    const oneHistorico = await HistoricoServices.getOneHistórico(idHistorico);

    res.status(200).send(oneHistorico);
}

module.exports = {
    getAllHistorico,
    getOneHistorico
}