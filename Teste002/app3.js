// Node JS módulo File System

const fs = require('fs')

// Write file - append
//fs.appendFile('./dados1.txt', 'Cristina\n', (err) => {
//   console.log(err)
//})

fs.appendFileSync('./dados1.txt', 'Hugo\n')

console.log('Ultima operação')
