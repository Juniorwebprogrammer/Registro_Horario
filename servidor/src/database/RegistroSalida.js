const mysql = require('./connection');

const getAllRegistroSalida = async() => {
    let result;

    let query = "Select * from registrosalida";

    try {

        result = await sendQuery(query);
        result = JSON.stringify(result, null, 2);

        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, (err, result) => {
                    if (err) {
                        resject(err);
                    } else {
                        resolve(result)
                    }
                })
            })
        }

    } catch (error) {
        console.log(error)
    }

    return result

}

const getOneRegistroSalida = async(idRegistroSalida) => {
    let result;

    let query = "Select * from registroSalida where idRegistroSalida = ?";

    try {

        result = await sendQuery(query);
        result = JSON.stringify(result, null, 2);

        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, [idRegistroSalida], (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result)
                    }
                })
            })
        }

    } catch (error) {
        console.log(error)
    }

    return result
}

const getOneRegistroSalidaUser = async(fk_registroSalida_Usuarios) => {
    let result;

    let query = "Select * from registroSalida where fk_registroSalida_Usuarios = ?";

    try {

        result = await sendQuery(query);
        result = JSON.stringify(result, null, 2);

        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, [fk_registroSalida_Usuarios], (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result)
                    }
                })
            })
        }

    } catch (error) {
        console.log(error)
    }

    return result
}

const getAllRegistrosSalidaFK = async() => {
    let result;
    let query = 'select * from registroSalida left join usuarios on registroSalida.fk_registroSalida_Usuarios = usuarios.idUsuario'

    try {
        result = await sendQuery(query);
        result = JSON.stringify(result, null, 2);

        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            })
        }
    } catch (error) {
        console.log(error)
    }

    return result
}

// Añadir búsqueda por fecha 

const postNewRegistroSalida = async(RegistroSalidaInsert) => {
    let result;
    let query = "Insert into registrosalida set ?";

    try {
        let result = await sendQuery(query);

        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, [RegistroSalidaInsert], (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            })
        }
    } catch (error) {
        console.log(error);
        return
    }

    return result;
}

module.exports = {
    getAllRegistroSalida,
    getAllRegistrosSalidaFK,
    getOneRegistroSalida,
    getOneRegistroSalidaUser,
    postNewRegistroSalida
}