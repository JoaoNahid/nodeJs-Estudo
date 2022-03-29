// file systems
const fs = require('fs')
const { join } = require('path')

// cria arquivos com os usuarios
const filePath = join(__dirname, 'users.json')

// buscando usuarios no arquivo users.json
const getUsers = () => {
    // verificando se o arquivo existe
    const data = fs.existsSync(filePath)
        ? fs.readFilesSync(filePath)
        : []

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

// salvar usuarios
const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t')) 

const userRoutes = (app) => {
    app.route('/users/:id?')
        // method GET => lendo dados do sv
        .get((req, res) => {
            const users = getUsers()

            res.send({ users })
        })

        // method POST => criando dados no host
        .post((req, res) => {
            const users = getUsers()

            users.push(req.body)
            saveUser(users)

            res.status(201).send('Ok')
        })

        .put((req, res) => {
            const users = getUsers()
            
            saveUser(user, map(user) => {
                if(user.id === req.params.id) {
                    return {
                        ...user,
                        ...req.body
                    }
                }
                return user
            })

            res.status(200).send('Ok')
        })
}

module.exports = userRoutes