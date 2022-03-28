const {DataTypes} = require('sequelize')
const {sequelize} = require('../config/db')

const Empresa = sequelize.define('Empresa', {
    razonSocial: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    cuit:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = Empresa