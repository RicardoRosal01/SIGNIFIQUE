const mongoose = require('mongoose')

const axiomaSchema = new mongoose.Schema({
    nome:{type:String,required:true},
    declaracao:{type:String,required:true}
})

module.exports = mongoose.model('Axioma',axiomaSchema)