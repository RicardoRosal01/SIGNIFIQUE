const express = require('express')
const router = express.Router()
const Axioma = require('../modelos/axiomas')

//trazer todos os axiomas
router.get('/',async (req,res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.nome !== '') {
        searchOptions.nome = new RegExp(req.query.nome,'i')
    }
    try{
        const axiomas = await Axioma.find(searchOptions)
        res.render('axioma/index',{
            axiomas: axiomas,
            searchOptions:req.query
        })
    } catch {
        res.redirect('/')
    }

})

//novo axioma
router.get('/novo',(req,res) => {
    res.render('axioma/novo',{axioma: new Axioma()})
})

//inserir axioma
router.post('/', async (req,res) => {
    const axioma = new Axioma({
        nome: req.body.nome,
        declaracao: req.body.declaracao
    })
    try {
            const novoAxioma = await axioma.save()
            res.redirect(`axioma/${novoAxioma.id}`)
    } catch {
            res.render('axioma/novo',{
                axioma: axioma,
                errorMessage: 'Erro ao declarar um novo axioma'
            })
    }
})

module.exports = router