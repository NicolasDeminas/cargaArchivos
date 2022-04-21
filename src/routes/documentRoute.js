const {Router} = require('express')
const {validateToken} = require('../middlewares/auth')
const {postDocumento, fileUpload, getFile, getDocuments} = require('../controllers/documentController')

const router = new Router()

router.post('/new', validateToken, postDocumento)

router.post('/test-upload',validateToken, fileUpload);

router.get('/', validateToken, getFile)

router.get('/:id',validateToken, getDocuments)

module.exports = router