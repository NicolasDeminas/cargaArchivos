const Documento = require('../models/documentosModel')
const {uploadFile} = require('../config/awsS3')

const addDocumento = async (data) => {
    try{
        const newDocumento = await Documento.create(data)
        return newDocumento
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    addDocumento
}




