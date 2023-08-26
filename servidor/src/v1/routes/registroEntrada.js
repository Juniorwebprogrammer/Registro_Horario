const express = require('express');

const router = express.Router();

const RegistroEntradaController = require('../../controllers/RegistroEntradaController');

router.get("/", RegistroEntradaController.getAllRegistroEntrada);

//router.get("/:idRegistroEntrada", RegistroEntradaController.getOneRegistroEntrada);

router.get("/:fk_registroEntrada_Usuarios", RegistroEntradaController.getOneRegistroEntradaUser);

router.post("/", RegistroEntradaController.postNewRegistroEntrada);

module.exports = router