const DepartamentoDB = require('../database/Departamento');

const getAllDepartamento = async () => {
    const allDepartamento = await DepartamentoDB.getAllDepartamentos()
    return allDepartamento;
}

const getOneDepartamento = async (idDepartamento) => {
    const oneDepartamento = await DepartamentoDB.getOneDepartamento(idDepartamento)
    return oneDepartamento
}

const postNewDepartamento = async(newDepartamento) => {
    const DepartamentoInsert = {
        ...newDepartamento
    }

    const postDepartamento = await DepartamentoDB.postNewDepartamento(DepartamentoInsert)

    return postDepartamento;
}

const putOneDepartamento = async(nombreDepartamento, idDepartamento) => {
    const putDepartamento = await DepartamentoDB.putOneDepartamento(nombreDepartamento, idDepartamento)
    return putDepartamento
}

const deleteDepartamento = async (idDepartamento) => {
    const deleteDepartamento = await DepartamentoDB.deleteDepartamento(idDepartamento)
    return deleteDepartamento
}

module.exports = {
    getAllDepartamento,
    getOneDepartamento,
    postNewDepartamento,
    putOneDepartamento,
    deleteDepartamento
}