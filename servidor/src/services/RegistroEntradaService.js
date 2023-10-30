const RegistroEntradaDB = require('../database/RegistroEntrada');

const getAllRegistrosEntrada = async() => {
    const allRegistrosEntrada = await RegistroEntradaDB.getAllRegistrosEntrada();
    return allRegistrosEntrada;
}

const getOneRegistroEntrada = async(idRegistroEntrada) => {
    const oneRegistroEntrada = await RegistroEntradaDB.getOneRegistroEntrada(idRegistroEntrada);
    return oneRegistroEntrada;
}

const getAllRegistrosEntradaFK = async() => {
    const allRegistrosEntradaFK = await RegistroEntradaDB.getAllRegistrosEntradaFK();
    return allRegistrosEntradaFK;
}

const getOneRegistroEntradaUser = async(fk_registroEntrada_Usuarios) => {
    const oneRegistroEntradaUserid = await RegistroEntradaDB.getOneRegistroEntradaUser(fk_registroEntrada_Usuarios);

    return oneRegistroEntradaUserid
}

const postNewRegistroEntrada = async(newRegistroEntrada) => {
    const registroEntradaInsert = {
        ...newRegistroEntrada
    }

    const postRegistroEntrada = await RegistroEntradaDB.postNewRegistroEntrada(registroEntradaInsert);

    return postRegistroEntrada
}

module.exports = {
    getAllRegistrosEntrada,
    getAllRegistrosEntradaFK,
    getOneRegistroEntrada,
    getOneRegistroEntradaUser,
    postNewRegistroEntrada
}