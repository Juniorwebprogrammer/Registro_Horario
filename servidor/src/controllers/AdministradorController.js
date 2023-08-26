const AdministradorServices = require('../services/AdministradorServices');

const getAllAdministrador = async (req,res) => {
    const allAdministrador = await AdministradorServices.getAllAdministrador();

    res.status(200).send(allAdministrador)
}

const getOneAdministrador = async (req,res) => {
    const {idAdministrador} = req.params;
    const oneAdministrador = await AdministradorServices.getOneAdministrador(idAdministrador);
    res.status(200).send(oneAdministrador)
}

const postNewAdministrador = async (req,res) => {
    // extraemos la propiedad body de la respuesta enviada por nuestro gestor
    const {body} = req;

    // realizamos una comprabación para poder conocer si todos los campos necesarios están completos
    if(
        !body.emailAdministrador ||
        !body.contraseñaAdministrador
    ) {
        console.log('no funciona');
        return
    };

    // una vez comprobado que el cuerpo del mensaje está validado creamos una variable que permita utilizar los datos para crear una nueva entrada

    const newAdministrador = {
        emailAdministrador : body.emailAdministrador,
        contraseñaAdministrador : body.contraseñaAdministrador
    }

    // llamamos al servicio implicado y lanzamos el estado

    const createAdministrador = AdministradorServices.postNewAdministrador(newAdministrador);

    res.status(201).send(createAdministrador);
}

module.exports = {
    getAllAdministrador,
    getOneAdministrador,
    postNewAdministrador
}