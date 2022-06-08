const {DataTypes} = require('sequelize')
const {sequelize} = require('../config/db')

const Usuario = sequelize.define('usuario_cuenta', {
    codigo: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    contactoApNombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactoNombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    legajo_nro: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.STRING
    },
    cuil: {
        type: DataTypes.STRING
    },
    nacimiento_fecha: {
        type: DataTypes.DATE
    },
    particular_domicilio: {
        type: DataTypes.STRING
    },
    particular_localidad: {
        type: DataTypes.STRING
    },
    particular_telefono:{
        type: DataTypes.STRING
    },
    particular_celular:{
        type: DataTypes.STRING
    },
    estado_civil_id:{
        type: DataTypes.TINYINT
    },
    hijos_a_cargo:{
        type: DataTypes.TINYINT
    },
    alta_fecha:{
        type: DataTypes.DATE
    },
    baja_fecha:{
        type: DataTypes.DATE
    },
    libreta_sanitaria:{
        type: DataTypes.DATE
    },
    obra_social:{
        type: DataTypes.STRING
    },
    examen:{
        type: DataTypes.STRING
    },
    observaciones:{
        type: DataTypes.STRING
    },
    sueldoValorHora:{
        type: DataTypes.DECIMAL
    },
    sueldoPremio:{
        type: DataTypes.DECIMAL
    },
    sueldoAsigFamiliar:{
        type: DataTypes.DECIMAL
    },
    sueldo_recibo_importe:{
        type: DataTypes.DECIMAL
    },
    activo:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sueldoValorHora_SinPresentismo:{
        type: DataTypes.DECIMAL
    },
    sueldoBanco:{
        type: DataTypes.DECIMAL
    },
    sueldoBancoAguinaldo:{
        type: DataTypes.DECIMAL
    },
    sueldoAguinaldo:{
        type: DataTypes.DECIMAL
    },
    username: {
        type: DataTypes.STRING
    },
    userpassword: {
        type: DataTypes.STRING
    },
    usr_sueldo_recibo_horas: {
        type: DataTypes.SMALLINT
    },
    sueldoLiqFinal: {
        type: DataTypes.DECIMAL
    },
    eMail: {
        type: DataTypes.STRING
    },
    Casillero: {
        type: DataTypes.INTEGER
    },
    sueldoFijo: {
        type: DataTypes.DECIMAL
    },
    sueldoDepEstimado: {
        type: DataTypes.INTEGER
    },
    Cuenta_Nro: {
        type: DataTypes.STRING
    },
    SueldoBancoVac: {
        type: DataTypes.DECIMAL
    },
    AndroidId: {
        type: DataTypes.STRING
    },
    ReciboCategoria: {
        type: DataTypes.STRING
    }

}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Usuario