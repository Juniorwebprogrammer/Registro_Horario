const DepartamentoServices = require('../services/DepartamentoService');

const getVistaConsulta = async(req, res) => {

    const AllDepartamento = await DepartamentoServices.getAllDepartamento();

    const Departamentos = JSON.parse(AllDepartamento);

    res.render('departamentos/consulta.handlebars', {
        departamento: Departamentos
    });
}

const getVistaCrearDepartamento = (req, res) => {
    res.render('departamentos/crearDepartamento.handlebars')
}

const getVistaActualizarDepartamento = async(req, res) => {
    const { idDepartamento } = req.params;

    const oneDepartamento = await DepartamentoServices.getOneDepartamento(idDepartamento);

    const Departamento = JSON.parse(oneDepartamento);

    res.render('departamentos/actualizarDepartamento.handlebars', {
        departamento: Departamento
    })
}

const getVistaEliminarDepartamento = (req, res) => {
    res.render('departamentos/eliminarDepartamento.handlebars')
}

const postCrearDepartamento = async(req, res) => {
    const { body } = req;

    if (!body.nombreDepartamento) {
        console.log('No está pasando los datos correctos')
        return
    }

    const newDepartamento = {
        nombreDepartamento: body.nombreDepartamento
    }

    const crearDepartamento = DepartamentoServices.postNewDepartamento(newDepartamento);

    res.status(201);
    res.render('departamentos/crearDepartamento.handlebars');
}

const putDepartamento = async(req, res) => {
    const { idDepartamento } = req.params;

    const { body } = req

    if (!body.nombreDepartamento) {
        console.log('No ha introducido los datos correctos para su actualización')
        return
    }

    const nombreDepartamento = body.nombreDepartamento

    const putDepartamento = await DepartamentoServices.putOneDepartamento(nombreDepartamento, idDepartamento);

    res.status(201);
    res.render('administrador/inicio.handlebars');
}

const deleteDepartamento = async(req, res) => {
    const { idDepartamento } = req.params;

    const deleteDepartamento = await DepartamentoServices.deleteDepartamento(idDepartamento);

    res.status(200);
    res.render('administrador/inicio.handlebars');
}

module.exports = {
    getVistaConsulta,
    getVistaCrearDepartamento,
    getVistaActualizarDepartamento,
    getVistaEliminarDepartamento,
    postCrearDepartamento,
    putDepartamento,
    deleteDepartamento
}