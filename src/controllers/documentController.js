const {addDocumento, findDocumentos} = require('../services/documentosService')
const multiparty = require('multiparty');
const fs = require('fs')
const {uploadFile, signFile} = require('../config/awsS3')
const {findEmpresa} = require('../services/empresasService')
const obj = require('../config/buckets')

const postDocumento = async (req, res) => {
    try{
        const {url, CreatedBy, UsuarioId} = req.body
        const newDocumento = await addDocumento({url, CreatedBy, UsuarioId})
        return res.json(newDocumento)
    }catch(err){
        console.log(err)
    }
}

const fileUpload = async (request, response) => {
    const {CreatedBy, UsuarioId, empresaId} = request.query
    const {tipo, descripcion, fecha} = request.body
    const file = request.files.file

    try{
      const buffer = file.data
      const fileName = `${Date.now().toString()}`;
      const data = await uploadFile(buffer, fileName, `pdf`, 'documentacion.bajas.0001');
        console.log(data)
        const Location = data.Location
        const newDocumento = await addDocumento({
            url: Location,
            CreatedBy,
            UsuarioId,
            tipo,
            descripcion,
            fecha
        })
        console.log(newDocumento)
        return response.status(200).json({data, document: newDocumento});
    }catch(err){

      return response.status(500).send(err);
    }
  }

const getFile = (req, res) => {
  let {url} = req.query
  let bucket = url.split('/')[3]
  let key = url.split('/')[4]
  let expires = 120
  const signedFile = signFile(bucket, key, expires)
  res.json(signedFile)
}

const getDocuments = async (req, res) => {
  try{
    let {id} = req.params
    const documentos = await findDocumentos(id)
    res.json(documentos)
  }catch(err){
    return response.status(500).send(err);
  }
}

module.exports = {
    postDocumento,
    fileUpload,
    getFile,
    getDocuments
}