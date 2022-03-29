// file systems
const fs = require('fs')
const { join } = fs

// arquivos com os usuarios
const filePath = join(__dirname, 'users.json')

// buscando usuarios no arquivo users.json

const getUsers = () => {
    // verificando se o arquivo existe
    const data = fs.existsSync(filePath)
        ? fs.readFilesSync(filePath)
        : []

    try {
        return JSON.parse(data)
    }
    catch (error) {
        return []
    }
}

// salvar usuarios
const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t')) 

const userRoutes = (app) => {
    app.route('/users')
}