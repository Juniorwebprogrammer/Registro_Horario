const RegistroSalidaServices = require('../services/RegistroSalidaService');

const getVistaConsulta = async(req, res) => {

    const allRegistroSalida = await RegistroSalidaServices.getAllRegistrosSalidaFK();

    const RegistrosSalida = JSON.parse(allRegistroSalida);

    res.render('registroSalida/consulta.handlebars', {
        registroSalida: RegistrosSalida
    });
}

const getVistaRegistrarSalida = (req, res) => {
    res.render('registroSalida/registrarSalida.handlebars');
};

const postSalida = async(req, res) => {
    const { body } = req;

    if (!body.fk_registroSalida_Usuarios, !body.DateTime) {
        console.log("Los datos introducidos no son los correctos")
        return
    }

    const newRegistroSalida = {
        fk_registroSalida_Usuarios: body.fk_registroSalida_Usuarios,
        DateTime: body.DateTime
    };

    const createNewRegistroSalida = RegistroSalidaServices.postNewRegistroSalida(newRegistroSalida);

    res.status(201).render('registroSalida/consulta.handlebars');
}

module.exports = {
    getVistaConsulta,
    getVistaRegistrarSalida,
    postSalida
}