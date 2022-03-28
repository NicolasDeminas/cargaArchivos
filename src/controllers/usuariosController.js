const {addUsuario, findUsuarios} = require('../services/usuariosService')

const postUsuario = async (req, res) => {
    const {contactoId, legajo, dni, email} = req.body
    try{
        const createUsuario = await addUsuario({contactoId, legajo, dni, email})
        return res.json(createUsuario)
    }catch(err){
        console.log(`Error ${err}`)
    }
}

const getUsuarios = async (req, res) => {
    try{
        const usuarios = await findUsuarios()
        return res.json(usuarios)
    }catch(err){
        console.log(`Error ${err}`)
    }
}

module.exports = {
    postUsuario,
    getUsuarios
}