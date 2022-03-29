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
const sequelize = new Sequelize(baseDeDados, user, pwd, {
    host: host,
    dialect: linguagem
})
module.exports = sequelize


