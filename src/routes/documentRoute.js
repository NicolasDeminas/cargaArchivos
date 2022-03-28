const {Router} = require('express')
const {validateToken} = require('../middlewares/auth')
const {postDocumento, fileUpload, getFile} = require('../controllers/documentController')

const router = new Router()

router.post('/new', validateToken, postDocumento)

router.post('/test-upload', fileUpload);

router.get('/', getFile)

module.exports = router