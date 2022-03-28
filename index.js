const express = require('express')
const AWS = require('aws-sdk')
const cors = require('cors')

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(cors())

const upload = require('./src/routes/uploadFile')
const users = require('./src/routes/usersRoute')
const empresa = require('./src/routes/empresasRoute')
const relation = require('./src/routes/relEmpresaUserRoute')
const usuarios = require('./src/routes/usuariosRoute')
const documento = require('./src/routes/documentRoute')

app.use("/upload", upload)
app.use('/users', users)
app.use('/empresa', empresa)
app.use('/relation', relation)
app.use('/usuarios', usuarios)
app.use('/documento', documento)

app.listen(PORT, () => {
    console.log(`Server OK`)
})

