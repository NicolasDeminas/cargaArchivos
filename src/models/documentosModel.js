const {DataTypes} = require('sequelize')
const {sequelize} = require('../config/db')

const User = require('./usersModel')
const Usuario = require('./usuariosModel')

const Documento = sequelize.define('Documento', {
    url: {
        type:DataTypes.STRING,
        allowNull: false
    }
})

Documento.belongsTo(User, {foreignKey: 'CreatedBy'})
User.hasMany(Documento, {foreignKey: 'CreatedBy'})
Documento.belongsTo(Usuario)
Usuario.hasMany(Documento)

module.exports = Documento