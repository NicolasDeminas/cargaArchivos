const {Router} = require('express')
const {validateToken} = require('../middlewares/auth')
const {getEmpresas, getEmpresa, postEmpresa} = require('../controllers/empresasController')

const router = new Router()

router.get('/', validateToken, getEmpresa)
router.get('/all',validateToken, getEmpresas)
router.post('/',validateToken, postEmpresa)


module.exports = router