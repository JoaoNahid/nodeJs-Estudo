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
const sequelize = new Sequelize('nodeJs', 'root', 'MysServer', {
    host: "localhost",
    dialect: "mysql"
})

// verificando se conectou ao banco
sequelize.authenticate().then(function(){
    console.log('Conectado ao banco')
}).catch(function(){
    console.log('Falha ao conectar ao banco')
})