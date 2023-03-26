// Node JS módulo File System

const fs = require('fs')

// reading files
if(fs.existsSync('./dados.csv')) {
    fs.readFile('./dados.csv', (err, data) => {
        if(err){
            console.log(err)
        } else {
            console.log(data.toString()) // toString() => permite verificar o contúdo do ficheiro.
        }
    })
} else {
    console.log('Ficheiro não encontrado.')
}

console.log('Ultima operação')
