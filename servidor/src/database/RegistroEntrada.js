const mysql = require('./connection');

const getAllRegistrosEntrada = async () => {
    let result;

    let query = "Select * from registroentrada";

    try {
        
        result = await sendQuery(query);
        result = JSON.stringify(result, null, 2);
        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, (err, result) => {
                    if(err) {
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

const getOneRegistroEntrada = async (idRegistroEntrada) => {
    let result;

    let query = 'Select * from registroEntrada where idRegistroEntrada = ?';

    try {
        result = await sendQuery(query);
        result = JSON.stringify(result, null, 2);
        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, [idRegistroEntrada], (err, result) => {
                    if(err){
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

const getOneRegistroEntradaUser = async (fk_registroEntrada_Usuarios) => {

    let result;

    let query = 'Select * from registroEntrada where fk_registroEntrada_Usuarios = ?';

    try {
        result = await sendQuery(query);
        result = JSON.stringify(result, null, 2);
        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, [fk_registroEntrada_Usuarios], (err, result) => {
                    if(err){
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

const postNewRegistroEntrada = async (newRegistroEntrada) => {
    let result;
    let query = "insert into registroentrada set ?";

    try {
        result = await sendQuery(query);
        function sendQuery(query){
            return new Promise((resolve, reject) => {
                mysql.query(query, [newRegistroEntrada], (err, result) => {
                    if(err) {
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

module.exports = {
    getAllRegistrosEntrada,
    getOneRegistroEntrada,
    getOneRegistroEntradaUser,
    postNewRegistroEntrada
}