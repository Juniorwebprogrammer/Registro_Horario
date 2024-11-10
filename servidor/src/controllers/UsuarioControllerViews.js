const fs = require('fs');
const cloudinary = require('cloudinary').v2

const UsuariosServices = require('../services/UsuariosServices');
const DepartementoServices = require('../services/DepartamentoService');
const Cloudinary = require('../config/cloudinary');

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


const postCrearUsuario = async (req, res) => {
    const { nombreUsuario, email_Usuario, departamento } = req.body;
    let mediaUrl = null;
    
    if ( !nombreUsuario || !email_Usuario || !departamento) {
        return res.status(417).json({ error: 'Expectation Failed' });
    }

    if (req.files && req.files.media) {
        // Guardamos localmente el archivo media
        const localFilePath = req.files.media.tempFilePath;
        
        try {
            // Subir la imagen a Cloudinary
            const result = await cloudinary.uploader.upload(localFilePath, {
                asset_folder: 'TuRegistroHorario' // folder en cloudinary
            });
            mediaUrl = result.secure_url; // ubicación del archivo => devuelve el enlace del archivo en cloudinary

            // Eliminar la imagen local después de la carga exitosa en Cloudinary
            fs.unlinkSync(localFilePath);
        } catch (error) {
            console.error('Error al subir la imagen a Cloudinary:', error);
            // Manejar errores y eliminar la imagen local si ocurre un error
            if (fs.existsSync(localFilePath)) {
                fs.unlinkSync(localFilePath);
            }
            return res.status(500).json({ error: 'Error al subir la imagen' });
        }
    }
    // Pasar los datos a la capa de servicios
    try {
        const newUsuario = {
            nombreUsuario,
            email_Usuario,
            departamento,
            media: mediaUrl
        };
        await UsuariosServices.postNewUsuario(newUsuario);
        res.status(201).redirect('/administrador');
    } catch (error) {
        console.error('Error al crear el usuario en la base de datos:', error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

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
        departamento: body.departamento,
        media: body?.media,
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