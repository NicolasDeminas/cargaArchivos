const {Router} = require('express')
const {validateToken} = require('../middlewares/auth')
const {postUsuario, getUsuarios} = require('../controllers/usuariosController')

const router = new Router()

router.post('/',validateToken, postUsuario)
router.get('/', validateToken, getUsuarios)


module.exports = router