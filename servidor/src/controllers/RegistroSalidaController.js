const RegistroSalidaServices = require('../services/RegistroSalidaService');

const getAllRegistroSalida = async (req,res) => {
    const allRegistroSalida = await RegistroSalidaServices.getAllRegistrosSalida();

    res.status(200).send(allRegistroSalida);
}

const getOneRegistroSalida = async (req,res) => {
    const {idRegistroSalida} = req.params;

    const oneRegistroSalida = await RegistroSalidaServices.getOneRegistroSalida(idRegistroSalida);

    res.status(200).send(oneRegistroSalida)
}

const getOneRegistroSalidaUser = async (req,res) => {
    const {fk_registroSalida_Usuarios} = req.params;

    const oneRegistroSalida = await RegistroSalidaServices.getOneRegistroSalidaUser(fk_registroSalida_Usuarios);

    res.status(200).send(oneRegistroSalida)
}

const postNewRegistroSalida = async (req,res) => {
    const {body} = req;

    if(
        !body.fk_registroSalida_Usuarios
    ) {
        console.log("Los datos introducidos no son los correctos");
        return;
    }

    const newRegistroSalida = {
        fk_registroSalida_Usuarios : body.fk_registroSalida_Usuarios
    }

    const createRegistroSalida = RegistroSalidaServices.postNewRegistroSalida(newRegistroSalida);

    res.status(201).send(createRegistroSalida)
}

module.exports = {
    getAllRegistroSalida,
    getOneRegistroSalida,
    getOneRegistroSalidaUser,
    postNewRegistroSalida
}