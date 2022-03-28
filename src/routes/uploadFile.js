const {Router} = require('express')
const update = require('../config/multerConfig')

const router = new Router()

router.get('/', (req, res) => {
    res.send(`Hola`)
})

router.post('/',(req, res) => {
    res.send(req.body)
})


module.exports = router