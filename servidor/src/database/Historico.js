const mysql = require('./connection');

const getAllHistoricos = async () => {
    let result;

    let query = "Select * from histórico";

    try {
        
        result = await sendQuery(query);
        result = JSON.stringify(result, null, 2);
        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, (err, result) => {
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

    return result;
}

const getOneHistorico = async (idHistorico) => {
    let result;

    let query = "Select * from histórico where idHistorico = ?";

    try {
        
        result = await sendQuery(query);
        result = JSON.stringify(result, null, 2);
        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, [idHistorico], (err, result) => {
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

    return result;
}

module.exports = {
    getAllHistoricos,
    getOneHistorico,
}