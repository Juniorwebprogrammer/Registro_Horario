const express = require('express');
const auth = require('../../helpers/auth');

const router = express.Router();

const departamentoControllerViews = require('../../controllers/DepartamentoControllerViews');

router.get('/', auth, departamentoControllerViews.getVistaConsulta);

router.get('/crearDepartamento', (req, res, next) => {
    if (req.session && req.session.admin) {
        return next();
    } else {
        res.redirect('/login')
    }
}, departamentoControllerViews.getVistaCrearDepartamento);

router.get('/actualizarDepartamento/:idDepartamento', auth, departamentoControllerViews.getVistaActualizarDepartamento);

router.get('/eliminarDepartamento', auth, departamentoControllerViews.getVistaEliminarDepartamento);

router.post('/postDepartamento', auth, departamentoControllerViews.postCrearDepartamento);

router.post('/editDepartamento/:idDepartamento', auth, departamentoControllerViews.putDepartamento);

router.post('/eliminarDepartamento/:idDepartamento', auth, departamentoControllerViews.deleteDepartamento);

module.exports = router;