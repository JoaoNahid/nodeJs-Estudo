const express = require('express')
const bodyParser = require('body-parser')

const userRoutes = require('../routes/userRoutes')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extend: false }))


userRoutes(app)

app.get('/', (req, res) => res.send('Olá Mundo!'))

app.listen(port, () => console.log('Api rodando na porta 3000'))