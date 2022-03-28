const Empresa = require('../models/empresasModel')
const RelEmpresaUser = require('../models/relEmpresaUser')


const findEmpresasByUser = async (userId) => {
    try{
        const empresas = await RelEmpresaUser.findAll({
            include: {
                model: Empresa,
            },
            where:{
                UserId: userId
            },
            
            
        })
        return empresas
    }catch(err){
        console.log(err)
    }
    
}

const findUsersByEmpresa = async (empresaId) => {
    try{
        const users = await RelEmpresaUser.findAll({
            where: {
                EmpresaId: empresaId
            }
        })
        return users
    }catch(err){
        console.log(err)
    }
    
}

const addRelation = async (userId, empresaId) => {
    try{
        const newRelation = await RelEmpresaUser.create({
            UserId: userId,
            EmpresaId: empresaId
        })
        console.log(newRelation)
        return newRelation
    }catch(err){
        console.log(err)
    }
    
}

module.exports = {
    findEmpresasByUser,
    findUsersByEmpresa,
    addRelation
}