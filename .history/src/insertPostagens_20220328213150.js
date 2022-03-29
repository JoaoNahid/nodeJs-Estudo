var sequelize = require('./sequelize')

// verificando se conectou ao banco
sequelize.authenticate().then(function () {
    console.log('Conectado ao banco')
}).catch(function (erro) {
    console.log('Falha ao conectar: ' + erro)
})

// Criando uma tabela 
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING // STRING = varchar
    },
    conteudo: {
        type: Sequelize.TEXT // TEXT
    }
})
// executando comando acima
//Postagem.sync({force: true})

// Inserindo dados
Postagem.create({
   titulo: "Aulinha de Node",
   conteudo: "lorem ipsum"
})