const Sequelize = require('sequelize')
// primeiro parâmetro: base de dados
var baseDeDados = 'nodeJs'
// segundo parâmetro: usuario
var user = 'root'
// terceiro parâmetro: senha
var pwd = 'MysServer'
// quarto parâmetro: host
var host = 'localhosts'
// quinto parâmetro: tipo de banco
var linguagem = 'mysql'
const sequelize = new Sequelize(baseDeDados, user, pwd, {
    host: host,
    dialect: linguagem
})

// verificando se conectou ao banco
sequelize.authenticate().then(function(){
    console.log('Conectado ao banco')
}).catch(function(erro){
    console.log('Falha ao conectar: '+ erro)
})