const {addUser, findUser} = require('../services/usersService')
const {authenticator, totp} = require('otplib')
const QRCode = require('qrcode')
const {generateToken} = require('../middlewares/auth')

authenticator.options = {step: 30, window: [3, 5]}

const postUser = async (req, res) => {
    console.log(req.body)
    const {nombre, mail} = req.body
    const secreto = authenticator.generateSecret()
    
    const newUser = {
        nombre,
        mail,
        secreto,
    }

    const qr = await QRCode.toDataURL(authenticator.keyuri(mail, 'Carga Archivos', secreto))

    await addUser(newUser)
    res.json({newUser, qr})
}

const validateUser = async (req, res) => {
    try{
    const {nombre, code} = req.query
    const user = await findUser(nombre)

    if(!user){
       return res.json({msg: `Usuario invalido`})
    }

    if(!authenticator.check(code, user.dataValues.secreto)){
        return res.json({msg: `Token invalido`})
        
    }

    

    const token = generateToken(user)
    return res.json({token})

}catch(err){
    throw err
}
}



module.exports = {
    postUser,
    validateUser
}