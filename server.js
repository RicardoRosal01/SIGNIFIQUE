//checando as variaveis de ambiente
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//import das dependências npm
const express = require('express')
const expressLayouts = require ('express-ejs-layouts')
const mongoose = require('mongoose')
const BodyParser = require('body-parser')

//instância do servidor
const app = express()

//configurando o banco de dados
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection
db.on('error',error => console.error(error))
db.once('open',() => console.log('Conectado ao mongoose - banco de dados da aplicação signifique'))

//configurações do servidor
app.set('view engine','ejs')
app.set('views', __dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(BodyParser.urlencoded({limit:'10 mb',extended:true}))

//importando rotas
const indexRouter = require('./rotas/index')
app.use('/',indexRouter)
const axiomaRouter = require('./rotas/axiomas')
app.use('/axioma',axiomaRouter)

//colocar o servidor em produção
app.listen(process.env.PORT || 3015,()=>{
    console.log(`servidor da SIGNIFIQUE rodando na porta ${process.env.PORT}`)
})
