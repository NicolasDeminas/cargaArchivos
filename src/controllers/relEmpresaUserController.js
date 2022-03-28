const {findEmpresasByUser, findUsersByEmpresa, addRelation} = require('../services/relEmpresaUserService')
const {findEmpresa} = require('../services/empresasService')

const getUsers = async (req, res) => {
    try{
        const {empresaId} = req.query
    const users = await findUsersByEmpresa(empresaId)
    return res.json(users)
    }catch(err){
        console.log(err)
    }
    
}

const getEmpresas = async (req, res) => {
    try{
        const {userId} = req.query
    const empresas = await findEmpresasByUser(userId)
    return res.json(empresas)
    }catch(err){
        console.log(err)
    }
    
}

const postRelation = async (req, res) => {
    try{
        const {userId, empresaId} = req.body
    const newRelation = await addRelation(userId, empresaId)
    return res.json(newRelation)
    }catch(err){
        console.log(err)
    }
    
}

module.exports = {
    getUsers,
    getEmpresas,
    postRelation
}