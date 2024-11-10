const fs = require('fs');
const cloudinary = require('cloudinary').v2

const UsuariosServices = require ("../services/UsuariosServices");
const Cloudinary = require("../config/cloudinary");

const getAllUsuarios = async (req,res) => {
    const allUsuarios = await UsuariosServices.getAllUsuarios();
    
    res.status(200).send(allUsuarios)
}

const getOneUsuario = async (req,res) => {
    const {idUsuario} = req.params;

    const oneUsuario = await UsuariosServices.getOneUsuario(idUsuario);

    res.status(200).send(oneUsuario);
}

const postNewUsuario = async (req, res) => {
    const { body } = req;
    let mediaUrl = null;

    if (!body.nombreUsuario || !body.email_Usuario || !body.departamento) {
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

    try {

        const newUsuario = {
            nombreUsuario: body.nombreUsuario,
            email_Usuario: body.email_Usuario,
            departamento: body.departamento,
            media: mediaUrl, 
        };

        const createUsuario = await UsuariosServices.postNewUsuario(newUsuario);

        res.status(201).json(createUsuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

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
        departamento : body.departamento,
        media : body?.media
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