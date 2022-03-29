// criando um servidor

var http = require('http')

// criando um servidor
// listen() -> porta em que vai abrir o servidor
http.createServer(function(req,res){
    res.end('Hello!')
}).listen(3000)

console.log('servidor onlaine')