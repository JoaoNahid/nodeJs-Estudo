const express = require('express')

const userRoutes = require('../routes/userRoutes')

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Olá Mundo!'))

app.listen(port, () => console.log('Api rodando na porta 3000'))