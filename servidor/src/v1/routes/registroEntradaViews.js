const express = require('express');
const auth = require('../../helpers/auth');

const router = express.Router();

const registroEntradaControllerViews = require('../../controllers/RegistroEntradaControllerViews');

router.get("/", auth, registroEntradaControllerViews.getVistaConsulta);

router.get('/registrarEntrada', auth, registroEntradaControllerViews.getVistaRegistrarEntrada);

router.post('/postEntrada', auth, registroEntradaControllerViews.postEntrada);

module.exports = router;