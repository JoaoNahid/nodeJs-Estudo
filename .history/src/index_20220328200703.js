// chamando o express e atribuindo a uma const
// a constante express recebe uma função do modulo do express
const express = require('express')

// variavel app é o proprio express, principal varialvel
const app = express()
var port = 3000


// criando rotas
app.get('/'n function(req,res){
    // send() envia mensagem
    res.send('Welcome to my server')
})



// criando o servidor, não pode haver código abaixo desse comando
app.listen(port, function(){
    console.log('Servidor Ounlaine')
})