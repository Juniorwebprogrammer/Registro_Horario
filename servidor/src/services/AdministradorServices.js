const AdministradorDB = require('../database/Administrador');

const getAllAdministrador = async () => {
    const allAdministrador = await AdministradorDB.getAllAdministrador()
    return allAdministrador;
}

const getOneAdministrador = async (idAdministrador) => {
    const oneAdministrador = await AdministradorDB.getOneAdministrador(idAdministrador)
    return oneAdministrador;
}

const postNewAdministrador = async(newAdministrador) => {

    const administradorInsert = {
        ...newAdministrador
    }
    
    const postAdministrador = await AdministradorDB.postNewAdministrador(administradorInsert)
    return postAdministrador;
}

module.exports = {
    getAllAdministrador,
    getOneAdministrador,
    postNewAdministrador
}