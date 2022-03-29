var sequelize = require('./link')

// verificando se conectou ao banco
link.authenticate().then(function () {
    console.log('Conectado ao banco')
}).catch(function (erro) {
    console.log('Falha ao conectar: ' + erro)
})

// Criando uma tabela 
const Postagem = link.define('postagens', {
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
   titulo: "Teste de inserção",
    conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
})