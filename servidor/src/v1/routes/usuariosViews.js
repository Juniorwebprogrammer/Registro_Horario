const express = require('express');
const auth = require('../../helpers/auth');

const router = express.Router();

const usuariosControllerViews = require('../../controllers/UsuarioControllerViews');

router.get("/", auth, usuariosControllerViews.getVistaConsulta);

router.get('/crearUsuario', auth, usuariosControllerViews.getVistaCrearUsuario);

router.get('/actualizarUsuario/:idUsuario', auth, usuariosControllerViews.getVistaActualizarUsuario);

router.post('/', auth, usuariosControllerViews.postCrearUsuario);

router.post('/editUsuario/:idUsuario', auth, usuariosControllerViews.putUsuario);

router.post('/deleteUsuario/:idUsuario', auth, usuariosControllerViews.deleteUsuario);

module.exports = router;