const RegistroEntradaServices = require('../services/RegistroEntradaService');

const getVistaConsulta = async(req, res) => {

    const allRegistroEntrada = await RegistroEntradaServices.getAllRegistrosEntradaFK();

    const RegistrosEntrada = JSON.parse(allRegistroEntrada);

    res.render('registroEntrada/consulta.handlebars', {
        registroEntrada: RegistrosEntrada
    });
}

const getVistaRegistrarEntrada = (req, res) => {
    res.render('registroEntrada/registrarEntrada.handlebars');
};

const postEntrada = async(req, res) => {
    const { body } = req;

    if (!body.fk_registroEntrada_Usuarios, !body.DateTiem) {
        console.log("Los datos introducidos no son los correctos")
        return
    }

    const newRegistroEntrada = {
        fk_registroEntrada_Usuarios: body.fk_registroEntrada_Usuarios,
        DateTiem: body.DateTiem
    };

    const createNewRegistroEntrada = RegistroEntradaServices.postNewRegistroEntrada(newRegistroEntrada);

    res.status(201).render('registroEntrada/consulta.handlebars');
}

module.exports = {
    getVistaConsulta,
    getVistaRegistrarEntrada,
    postEntrada
}