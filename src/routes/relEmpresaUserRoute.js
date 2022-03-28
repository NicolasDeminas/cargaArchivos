const {Router} = require('express')
const {validateToken} = require('../middlewares/auth')
const {getEmpresas, getUsers, postRelation} = require('../controllers/relEmpresaUserController')

const router = new Router()


router.get('/byUser', validateToken, getEmpresas)
router.get('/byEmpresa', validateToken, getUsers)
router.post('/new', validateToken, postRelation)


module.exports = router