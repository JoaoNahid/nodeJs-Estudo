const express = require('express')
const bodyParser = require('body-parser')

const userRoutes = require('../routes/userRoutes')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))


userRoutes(app)

app.get('/home', (req, res) => res.send('Olá Mundo!'))

app.listen(port, () => console.log('Api rodando na porta 3000'))