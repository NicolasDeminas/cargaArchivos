const Usuario = require('../models/usuariosModel')

const addUsuario = async (data) => {
    const newUsuario = await Usuario.create(data)
    return newUsuario
}

const findUsuarios = async () => {
    const usuarios = await Usuario.findAll()
    return usuarios
}

module.exports = {
    addUsuario,
    findUsuarios
}