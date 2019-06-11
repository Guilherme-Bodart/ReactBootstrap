const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const porta = 8000;

app.listen(porta,()=>{
    console.log('Servidor em execução na porta '+ porta)
})