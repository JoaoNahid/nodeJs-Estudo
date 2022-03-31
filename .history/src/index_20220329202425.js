// chamando o express e atribuindo a uma const
// a constante express recebe uma função do modulo do express
const express = require('express')

// variavel app é o proprio express, principal varialvel
const app = express()
var port = 3000
const handlebars = require('express-handlebars')
const { allowedNodeEnvironmentFlags } = require('process')

// Config
// Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', handlebars)

// conexao com o banco
const Sequelize = require('sequelize')
var baseDeDados = 'nodeJs'
var user = 'root'
var pwd = 'MysServer'
var host = 'localhost'
var linguagem = 'mysql'
const link = new Sequelize(baseDeDados, user, pwd, {
    host: host,
    dialect: linguagem
})

//Rotas

app.get('/sobre', (req,res) => {
    res.send('Rotas de cadastro')
})



// criando o servidor, não pode haver código abaixo desse comando
app.listen(port, function () {
    console.log('Servidor Ounlaine')
})