const express = require('express');

const router = express.Router();

const HistoricoController = require('../../controllers/HistoricoController');

router.get("/", HistoricoController.getAllHistorico);

router.get('/:idHistorico', HistoricoController.getOneHistorico);

module.exports = router