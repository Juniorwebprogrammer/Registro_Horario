const express = require('express');
const auth = require('../../helpers/auth');

const router = express.Router();

const consultaEspecificaControllerViews = require('../../controllers/ConsultaEspecificaControllerViews');

router.get('/', auth, consultaEspecificaControllerViews.getVistaConsulta);

module.exports = router;