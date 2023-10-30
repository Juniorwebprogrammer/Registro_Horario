const UsuariosDB = require('../database/Usuarios');

const getAllUsuarios = async() => {
    const allUsuarios = await UsuariosDB.getAllUsuarios()
    return allUsuarios;
}

const getOneUsuario = async(idUsuario) => {
    const oneUsuario = await UsuariosDB.getOneUsuario(idUsuario);
    return oneUsuario;
}

const getAllUsuariosFK = async() => {
    const allUsuariosFK = await UsuariosDB.getAllUsuariosFK();
    return allUsuariosFK;
}

const postNewUsuario = async(newUsuario) => {
    const UsuarioInsert = {
        ...newUsuario
    }

    const postUsuario = await UsuariosDB.postNewUsuario(UsuarioInsert)

    return postUsuario;
}

const putOneUsuario = async(editUsuario, idUsuario) => {
    const editsUsuario = {
        ...editUsuario
    }

    const putUsuario = await UsuariosDB.putOneUsuario(editsUsuario, idUsuario)

    return putUsuario;
}

const deleteUsuario = async(idUsuario) => {
    const deleteUsario = await UsuariosDB.deleteUsuarios(idUsuario);
    return deleteUsario
}

module.exports = {
    getAllUsuarios,
    getOneUsuario,
    getAllUsuariosFK,
    postNewUsuario,
    putOneUsuario,
    deleteUsuario
}