const express = require('express');
const auth = require('../../helpers/auth');

const router = express.Router();

const registroSalidaControllerViews = require('../../controllers/RegistroSalidaControllerViews');

router.get("/", auth, registroSalidaControllerViews.getVistaConsulta);

router.get('/registrarSalida', auth, registroSalidaControllerViews.getVistaRegistrarSalida);

router.post('/postSalida', auth, registroSalidaControllerViews.postSalida);

module.exports = router;