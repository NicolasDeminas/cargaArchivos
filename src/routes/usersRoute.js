const {Router} = require('express')
const {postUser, validateUser} = require('../controllers/usersController')

const router = new Router()

router.post('/', postUser)
router.get('/', validateUser)


module.exports = router