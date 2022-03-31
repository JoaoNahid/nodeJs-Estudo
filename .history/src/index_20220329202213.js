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

const Sequelize = require('sequelize')
// primeiro parâmetro: base de dados
var baseDeDados = 'nodeJs'
// segundo parâmetro: usuario
var user = 'root'
// terceiro parâmetro: senha
var pwd = 'MysServer'
// quarto parâmetro: host
var host = 'localhost'
// quinto parâmetro: tipo de banco
var linguagem = 'mysql'
const link = new Sequelize(baseDeDados, user, pwd, {
    host: host,
    dialect: linguagem
})





// criando o servidor, não pode haver código abaixo desse comando
app.listen(port, function () {
    console.log('Servidor Ounlaine')
})