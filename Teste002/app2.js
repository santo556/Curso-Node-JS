// Node JS módulo File System

const fs = require('fs')

// Write file
fs.writeFile('./dados1.txt', 'André Venãncio dos Santos', () => {
    console.log('Ficheiro escrito')
})

fs.writeFileSync('./dados2.txt', 'João Ribeiro')

console.log('Ultima operação')
