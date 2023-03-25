const server = require('http')

server.createServer((req, res) => {
    res.end('Testando')
}).listen(3000)