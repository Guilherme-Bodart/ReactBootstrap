const mongoose = require('mongoose')
const Schema = mongoose.Schema
let newSchema = new Schema({
    nome:{type:String, required:true,max:100},
    marca:{type:Number, required:true},
})

module.export = mongoose.model('')