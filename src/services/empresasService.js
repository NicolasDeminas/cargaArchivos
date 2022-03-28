const Empresa = require('../models/empresasModel')

const addEmpresa = async (empresa) => {
    
    try{
        const newEmpresa = await Empresa.create(empresa)
        
    }catch(err){
        console.log(`Error al crear la empresa: ${err}`)
    }
    
}

const findEmpresas = async () => {
    try{
        const empresas = await Empresa.findAll()
        return empresas
    }catch(err){
        console.log(`Error al buscar empresas: ${err}`)
    }
}

const findEmpresa = async (id) => {
    try{
        const empresa = await Empresa.findOne({where: {id}})
        return empresa
    }catch(err){
        console.log(`Error al buscar la empresa: ${err}`)
    }
}

module.exports = {addEmpresa, findEmpresa, findEmpresas}