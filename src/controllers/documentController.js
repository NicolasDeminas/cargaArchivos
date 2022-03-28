const {addDocumento} = require('../services/documentosService')
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

    const empresa = await findEmpresa(empresaId)
    
    // const razonSocial = empresa.dataValues.razonSocial
    const form = new multiparty.Form();
    form.parse(request, async (error, fields, files) => {
      if (error) {
        return response.status(500).send(error);
      };
      try {
        const path = files.null[0].path;
        const buffer = fs.readFileSync(path);
        //const type = await FileType.fromBuffer(buffer);
        const fileName = `${Date.now().toString()}`;
        const data = await uploadFile(buffer, fileName, `pdf`, 'documentacion.bajas.0001');
        const Location = data.Location
        const newDocumento = await addDocumento({
            url: Location,
            CreatedBy,
            UsuarioId
        })
        return response.status(200).json({data, document: newDocumento});
        // return response.status(200).send(`data`);
      } catch (err) {
        console.log(err)
        return response.status(500).send(err);
      }
    });
  }

const getFile = (req, res) => {
  let {url} = req.query
  let bucket = url.split('/')[3]
  let key = url.split('/')[4]
  let expires = 120
  const signedFile = signFile(bucket, key, expires)
  res.json(signedFile)
}

module.exports = {
    postDocumento,
    fileUpload,
    getFile
}