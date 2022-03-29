// chamando o express e atribuindo a uma const
// a constante express recebe uma função do modulo do express
const express = require('express')

// variavel app é o proprio express, principal varialvel
const app = express()
var port = 3000


// criando rotas
app.get('/', function(req,res){
    // send() envia mensagem
    res.send('Welcome to my server')
})

app.get('/sobre', function(req,res){
    //req = requisição, ou seja, pede dados ao sv
    // res = resposta, ou seja, envia algo para o sv
    res.send('Pagina sobre')
})

app.get('/contato', function(req,res){
    res.send('Envie seu contato')
})


//passagem de parametros por GET
// :nome -> nome é o parametro
app.get('/ola/:nome/:cargo', function(req,res){
    res.send('Ola')
})



// criando o servidor, não pode haver código abaixo desse comando
app.listen(port, function(){
    console.log('Servidor Ounlaine')
})