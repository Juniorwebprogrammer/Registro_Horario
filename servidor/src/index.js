const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const hbs = require('express-handlebars');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

// Inicialización

const app = express(); // inicialización de express

const Port = process.env.PORT || 4000; // configuración de puertos

const engine = hbs.engine(); // inicialización de handlebars

// Inicialización de las opciones para mysqlStore
// Tienen que aparecer user, password y database en texto claro ya que sino no te deja conectarte

const options = {
    host: process.env.host,
    port: process.env.port,
    user: 'root',
    password: 'root',
    database: 'registrohorario'
}

const sessionStore = new MySQLStore(options); // Guardar sessiones en mysql

dotenv.config(); // lectura de .env

const v1UsuarioRouter = require("./v1/routes/usuarios");

const v1UsuarioViewRouter = require("./v1/routes/usuariosViews");

const v1AdministradorRouter = require('./v1/routes/administrador');

const v1AdminstradorViewRouter = require('./v1/routes/administradorViews');

const v1DepartamentoRouter = require('./v1/routes/departamento');

const v1DepartamentoViewRouter = require('./v1/routes/departamentoViews');

const v1RegistroEntradaRouter = require('./v1/routes/registroEntrada');

const v1RegistroEntradaViewRouter = require('./v1/routes/registroEntradaViews');

const v1RegistroSalidaRouter = require('./v1/routes/registroSalida');

const v1RegistroSalidaViewRouter = require('./v1/routes/registroSalidaViews');

const v1ConsultaEspecificaViewRouter = require('./v1/routes/consultaEspecificaViews');

const v1historicoRouter = require('./v1/routes/historico');

const v1loginRouter = require('./v1/routes/auth');

// Middelwares

app.use(morgan('dev')); // mostrar registro de http method

app.use(express.json()); // body-parser

app.use(express.urlencoded({ extended: true })); // analiza url entrates con datos

app.use(cors()); // conección API desde frontend

app.use(express.static(path.join(__dirname, 'public'))); // Designación de carpeta pública

app.use(session({
    key: 'cookie_usuario',
    secret: process.env.secreto,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
})); // generador de sesiones

// Settings

app.set('view engine', 'handlebars'); // configaración de handlebars

app.set('views', path.join(__dirname, 'views')); // designación de carpeta views

// Engine

app.engine('handlebars', engine); // definición del engine handlebars

// Routes

app.use('/api/v1/usuarios', v1UsuarioRouter);

app.use('/api/v1/administradores', v1AdministradorRouter);

app.use('/api/v1/departamentos', v1DepartamentoRouter);

app.use('/api/v1/registroEntrada', v1RegistroEntradaRouter);

app.use('/api/v1/registroSalida', v1RegistroSalidaRouter);

app.use('/api/v1/historicos', v1historicoRouter);

app.use('/', v1loginRouter);

// Vistas

app.use('/administrador', v1AdminstradorViewRouter);

app.use('/administrador/departamentos', v1DepartamentoViewRouter);

app.use('/administrador/usuarios', v1UsuarioViewRouter);

app.use('/administrador/registroEntrada', v1RegistroEntradaViewRouter);

app.use('/administrador/registroSalida', v1RegistroSalidaViewRouter);

app.use('/administrador/consultaEspecifica', v1ConsultaEspecificaViewRouter);

// Servidor

app.listen(Port, console.log(`🐈Server on port ${Port}🐰`));