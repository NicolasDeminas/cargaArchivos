const User = require('../models/usersModel')

const addUser = async (user) => {
    
    try{
        const newUser = await User.create(user)
    }catch(err){
        console.log(`Error at creating user: ${err}`)
    }
    
}

const findUser = async (nombre) => {
    try{
        const user = User.findOne({where: {nombre}})
        return user
    }catch(err){

    }
}


// const u = {
//     nombre: 'Nicolas',
//     mail: 'deminas.nicolas@gmail.com',
//     secreto: 'a0a0a0445'
// }


module.exports = {addUser, findUser}