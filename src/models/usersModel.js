const {DataTypes} = require('sequelize')
const {sequelize} = require('../config/db')

const User = sequelize.define('User', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    mail:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    secreto: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User