// chamando o express e atribuindo a uma const
// a constante express recebe uma função do modulo do express
const express = require('express')

// variavel app é o proprio express, principal varialvel
const app = express()
var port = 3000


// criando rotas
app.get('/', function (req, res) {
    // send() envia mensagem
    res.send('Welcome to my server')
})

app.get('/sobre', function (req, res) {
    //req = requisição, ou seja, pede dados ao sv
    // res = resposta, ou seja, envia algo para o sv
    res.send('Pagina sobre')
})

// exibindo HTML
app.get('/contato', function (req, res) {
    res.sendFile(__dirname + '/html/index.html')
})


//passagem de parametros por GET
// :nome -> nome é o parametro
// qnd o parametro é criado ele é essencial, senão a pagina não roda
app.get('/ola/:nome/:sobrenome', function (req, res) {
    // req.params exibe os parametros
    var nome = req.params.nome
    var sobrenome = req.params.sobrenome
    // send só pode ser enviado uma vez
    res.send('Meu nome e: ' + nome + ' ' + sobrenome)
    // res.send(nome + ' ' + sobrenome) -> esse send(), por exemplo, não será exibido
})



// criando o servidor, não pode haver código abaixo desse comando
app.listen(port, function () {
    console.log('Servidor Ounlaine')
})