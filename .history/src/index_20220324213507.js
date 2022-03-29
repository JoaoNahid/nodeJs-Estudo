const express = require('express')
const bodyParser = require('body-parser')

const userRoutes = require('../routes/userRoutes')

const app = express()
app.use(bodyParser.urlencoded({ extend: false }))
const port = 3000

userRoutes(app)

app.get('/', (req, res) => res.send('Olá Mundo!'))

app.listen(port, () => console.log('Api rodando na porta 3000'))