const express = require('express');
const mysql = require('./connection');

const getAllUsuarios = async() => {
    let result;
    let query = 'Select * from usuarios'
    try {
        result = await sendQuery(query)
        result = JSON.stringify(result, null, 2)

        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, (err, result) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(result)
                })
            })
        }
    } catch (err) {
        console.log(err)
    }
    //console.log(result)
    return result
}

const getOneUsuario = async(idUsuario) => {
    let result;
    let query = 'Select * from usuarios where idUsuario = ?';

    try {
        result = await sendQuery(query);
        result = JSON.stringify(result, null, 2);

        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, [idUsuario], (err, result) => {
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
    }

    return result;
}

const getAllUsuariosFK = async() => {
    let result;
    let query = 'select * from usuarios left join departamento on usuarios.departamento = departamento.idDepartamento'
    try {
        result = await sendQuery(query)
        result = JSON.stringify(result, null, 2)

        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, (err, result) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(result)
                })
            })
        }
    } catch (err) {
        console.log(err)
    }

    return result
}

const postNewUsuario = async(newUsuario) => {
    let result;
    let query = 'insert into usuarios set ?';

    try {
        result = await sendQuery(query);

        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, [newUsuario], (err, result) => {
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

const putOneUsuario = async(editsUsuario, idUsuario) => {
    let result;
    let query = `Update usuarios set ?  where idUsuario = ${idUsuario}`;
    try {
        result = await sendQuery(query);

        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, [editsUsuario], (err, result) => {
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

const deleteUsuarios = async(idUsuario) => {
    let result;
    let query = "Delete from usuarios where idUsuario = ?";

    try {
        result = await sendQuery(query);

        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, [idUsuario], (err, result) => {
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

module.exports = {
    getAllUsuarios,
    getOneUsuario,
    getAllUsuariosFK,
    postNewUsuario,
    putOneUsuario,
    deleteUsuarios
}