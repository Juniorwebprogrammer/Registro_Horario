const express = require('express');
const auth = require('../../helpers/auth');

const router = express.Router();

const administradorControllerViews = require('../../controllers/AdministradorControllerViews');

router.get("/", auth, administradorControllerViews.getVistaPrincipal);

module.exports = router;