const {addEmpresa, findEmpresa, findEmpresas} = require('../services/empresasService')

const getEmpresas = async (req, res) => {
    const empresas = await findEmpresas()
    res.json(empresas)
}

const getEmpresa = async (req, res) => {
    const { id } = req.query
    const empresa = await findEmpresa(id)

    res.json(empresa)

}

const postEmpresa = async (req, res) => {
    const {razonSocial, cuit} = req.body

    const empresa = await addEmpresa({razonSocial, cuit})

    return res.json(empresa)

}


module.exports = {
    getEmpresas,
    getEmpresa,
    postEmpresa
}