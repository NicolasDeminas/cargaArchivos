const {Sequelize} = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize('Documentacion', null, null, {
    host: process.env.HOST,
    dialect: 'mssql',
    dialectOptions: {
      authentication: {
        type: 'default',
        options: {
          domain: process.env.HOST,
          userName: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD
        }
      },
      options: {
        //instanceName: 'SQLEXPRESS',
        port: 1107
      }
    }
  })

sequelize.sync()


const test = async () => {try{
    await sequelize.authenticate()
    console.log(`connection OK`)
}catch(err){
    console.log(`Error al conectarse a la BD: ${err}`)
}
}

module.exports = {
    sequelize, 
    test
}
