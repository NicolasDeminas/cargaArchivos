const {DataTypes} = require('sequelize')
const {sequelize} = require('../config/db')

const Usuario = sequelize.define('Usuario', {
    contactoId: {
        type: DataTypes.STRING,
    },
    legajo: {
        type: DataTypes.INTEGER
    },
    dni: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    }

})

module.exports = Usuario