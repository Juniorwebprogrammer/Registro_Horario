const RegistroSalidaDB = require('../database/RegistroSalida');

const getAllRegistrosSalida = async () => {
    const allRegistrosSalida = await RegistroSalidaDB.getAllRegistroSalida();
    return allRegistrosSalida;
}

const getOneRegistroSalida = async (idRegistroSalida) => {
    const oneRegistroSalida = await RegistroSalidaDB.getOneRegistroSalida(idRegistroSalida);

    return oneRegistroSalida;
}

const getOneRegistroSalidaUser = async (fk_registroSalida_Usuarios) => {
    const oneRegistroSalida = await RegistroSalidaDB.getOneRegistroSalidaUser(fk_registroSalida_Usuarios);

    return oneRegistroSalida;
}

const postNewRegistroSalida = async(newRegistroSalida) => {
    const RegistroSalidaInsert = {
        ...newRegistroSalida
    };

    const postRegistroSalida = await RegistroSalidaDB.postNewRegistroSalida(RegistroSalidaInsert);

    return(postRegistroSalida);
}

module.exports = {
    getAllRegistrosSalida,
    getOneRegistroSalida,
    getOneRegistroSalidaUser,
    postNewRegistroSalida
}