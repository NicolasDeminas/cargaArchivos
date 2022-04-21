const {Router} = require('express')
const {postUser, validateUser} = require('../controllers/usersController')
const {validateToken} = require('../middlewares/auth')

const router = new Router()

router.post('/', postUser)
router.get('/', validateUser)
router.get('/isValidToken', validateToken, (req, res) => {
    res.json({msg: `user authenticated`})
})

module.exports = router