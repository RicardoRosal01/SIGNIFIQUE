const express = require('express')
const router = express.Router()
const Axioma = require('../modelos/axiomas')

//trazer todos os axiomas
router.get('/',(req,res) => {
    res.render('index')
})

//novo axioma
router.get('/novo',(req,res) => {
    res.render('index')
})

//inserir axioma
router.post('/novo',(req,res) => {
    res.render('index')
})

module.exports = router