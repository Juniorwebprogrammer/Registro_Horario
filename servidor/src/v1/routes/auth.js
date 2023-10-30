const express = require('express');
const router = express.Router();

const connection = require('../../database/connection');

router.get('/', (req, res) => {
    res.render('login/login.handlebars')
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

// obtenemos desde la base de datos una contraseña encriptada en aes la cual utilizando unhex descriframos el hexadecimal y nos deja un buffer el cual con una función toString() de node la convertimos en texto claro para realizar el login

router.post('/auth', async(req, res) => {
    const emailAdministrador = req.body.emailAdministrador;
    const contraseñaAdministrador = req.body.contraseñaAdministrador;
    const query = `select emailAdministrador, aes_decrypt(unhex(contraseñaAdministrador), "admin") contraseñaAdministrador from administrador`;
    if (emailAdministrador && contraseñaAdministrador) {
        connection.query(query, [contraseñaAdministrador], async(err, results) => {
            if (await results[0].emailAdministrador !== emailAdministrador) {
                res.status(400).send('Usuario incorrecto');
                return;
            }
            if (await results[0].contraseñaAdministrador.toString() !== contraseñaAdministrador) {
                res.status(400).send('Contraseña incorrecta');
                return;
            } else {
                req.session.admin = true;
                res.status(200).redirect('/administrador')
            }
        })
    };
});

module.exports = router;