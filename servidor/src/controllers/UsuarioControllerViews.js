const UsuariosServices = require('../services/UsuariosServices');
const DepartementoServices = require('../services/DepartamentoService');

const getVistaConsulta = async(req, res) => {

    const allUsuarios = await UsuariosServices.getAllUsuariosFK();

    const Usuarios = JSON.parse(allUsuarios);

    res.render('usuarios/consulta.handlebars', {
        usuario: Usuarios
    });
}

const getVistaCrearUsuario = async(req, res) => {
    // Llamada al departementoServices para hacer una consulta de departamentosy poder utilizarlos como select
    const allDepartamento = await DepartementoServices.getAllDepartamento();

    const Departamento = JSON.parse(allDepartamento);

    res.render('usuarios/crearUsuario.handlebars', {
        departamento: Departamento
    });
};

const getVistaActualizarUsuario = async(req, res) => {

    const { idUsuario } = req.params;

    const oneUsuario = await UsuariosServices.getOneUsuario(idUsuario);

    const Usuario = JSON.parse(oneUsuario);

    res.render('usuarios/actualizarUsuario.handlebars', {
        usuario: Usuario
    });
};

const postCrearUsuario = async(req, res) => {
    const { body } = req;

    if (!body.nombreUsuario ||
        !body.email_Usuario ||
        !body.departamento
    ) {
        console.log("Datos invalidos");
        return
    }

    const newUsuario = {
        nombreUsuario: body.nombreUsuario,
        email_Usuario: body.email_Usuario,
        departamento: body.departamento
    }

    const createUsuario = UsuariosServices.postNewUsuario(newUsuario);

    res.status(201).render('administrador/inicio.handlebars');
}

const putUsuario = async(req, res) => {
    const { idUsuario } = req.params;
    const { body } = req;

    if (!body.nombreUsuario, !body.email_Usuario, !body.departamento) {
        console.log("Rellene los datos correctamente")
        return
    }

    const editUsuario = {
        nombreUsuario: body.nombreUsuario,
        email_Usuario: body.email_Usuario,
        departamento: body.departamento
    }

    const putUsuario = UsuariosServices.putOneUsuario(editUsuario, idUsuario);

    res.status(200).render('administrador/inicio.handlebars');
}

const deleteUsuario = async(req, res) => {
    const { idUsuario } = req.params;

    const deleteUsuario = await UsuariosServices.deleteUsuario(idUsuario);

    res.status(200).render('administrador/inicio.handlebars');
}

module.exports = {
    getVistaConsulta,
    getVistaCrearUsuario,
    getVistaActualizarUsuario,
    postCrearUsuario,
    putUsuario,
    deleteUsuario
}