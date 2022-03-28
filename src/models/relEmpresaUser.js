const {DataTypes} = require('sequelize')
const {sequelize} = require('../config/db')

const User = require('./usersModel')
const Empresa = require('./empresasModel')


const RelEmpresaUser = sequelize.define('RelEmpresaUser', {})

User.belongsToMany(Empresa, {through: RelEmpresaUser})
Empresa.belongsToMany(User, {through: RelEmpresaUser})
RelEmpresaUser.belongsTo(User)
RelEmpresaUser.belongsTo(Empresa)
User.hasMany(RelEmpresaUser)
Empresa.hasMany(RelEmpresaUser)

module.exports = RelEmpresaUser
