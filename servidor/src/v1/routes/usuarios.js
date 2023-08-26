const express = require('express')

const router = express.Router()

const usuariosController = require('../../controllers/UsuariosControllers');

router.get("/", usuariosController.getAllUsuarios);
router.get("/:idUsuario", usuariosController.getOneUsuario);
router.post("/", usuariosController.postNewUsuario);
router.put("/:idUsuario", usuariosController.putOneUsuario);
router.delete("/:idUsuario", usuariosController.deleteUsuario);

module.exports = router;