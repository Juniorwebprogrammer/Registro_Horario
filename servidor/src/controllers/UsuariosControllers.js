const UsuariosServices = require ("../services/UsuariosServices");

const getAllUsuarios = async (req,res) => {
    const allUsuarios = await UsuariosServices.getAllUsuarios();
    
    res.status(200).send(allUsuarios)
}

const getOneUsuario = async (req,res) => {
    const {idUsuario} = req.params;

    const oneUsuario = await UsuariosServices.getOneUsuario(idUsuario);

    res.status(200).send(oneUsuario);
}

const postNewUsuario = async (req,res) => {
    const {body} = req;

    if ( 
        !body.nombreUsuario || 
        !body.email_Usuario ||
        !body.departamento
    ) {
        console.log('Datos invalidos');
        return
    }

    const newUsuario = {
        nombreUsuario : body.nombreUsuario,
        email_Usuario : body.email_Usuario,
        departamento : body.departamento
    }

    const createUsuario = UsuariosServices.postNewUsuario(newUsuario);

    res.status(201).send(createUsuario);
}

const putOneUsuario = async (req,res) => {
    const {idUsuario} = req.params;
    const {body} = req;

    if(
        !body.nombreUsuario ||
        !body.email_Usuario ||
        !body.departamento
    ) {
        console.log('Rellene los datos correctamente')
        return
    }

    const editUsuario = {
        nombreUsuario : body.nombreUsuario,
        email_Usuario : body.email_Usuario,
        departamento : body.departamento
    }

    const putUsuario = UsuariosServices.putOneUsuario(editUsuario, idUsuario);

    res.status(200).send(putUsuario);
}

const deleteUsuario = async (req,res) => {
    const {idUsuario} = req.params;
    const deleteUsuario = UsuariosServices.deleteUsuario(idUsuario)
    res.status(200).send(deleteUsuario);
}

module.exports = {
    getAllUsuarios,
    getOneUsuario,
    postNewUsuario,
    putOneUsuario,
    deleteUsuario
}