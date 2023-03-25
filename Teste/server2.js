const http = require('http')
const { url } = require('inspector')
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "Text/plain; charset=utf-8")

    if(req.url == "/") {
        res.end('Página inicial do nosso website')
    } else if(req.url == "/new") {
        res.end('Página nova do nosso website')
    } else if(req.url == "/contacts") {
        res.end('Página de contactos do nosso website')
    } else {
        res.end('Página desconhecida')
    }

    //res.end(req.url)
    //res.end('<h1>Criado output de dados do request no console.</h1>')
    //res.end('Olá, Novo Mundo!!!')
})

server.listen(port, host, () => {
    console.log('Novo servidor em execução.')
})