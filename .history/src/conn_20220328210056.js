const Sequelize = require('sequelize')
// primeiro parâmetro: base de dados
// segundo parâmetro: usuario
// terceiro parâmetro: senha
// quarto parâmetro: usuario
// quinto parâmetro: tipo de banco
const sequelize = new Sequelize('nodeJs', 'root', 'MysServer', {
    host: "localhost",
    dialect: "mysql"
})

// verificando se conectou ao banco
sequelize.authenticate()