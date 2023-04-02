// Node JS módulo File System

const fs = require('fs')

// delete files
if(fs.existsSync('./dados1.txt')){
    fs.unlink('./dados1.txt', (err) => {
    if(err){
        console.log(err)
    } else {
        console.log('ficheiro eliminado com sucesso.')
    }
})
} else {
    console.log('Ficheiro não exite.')
}

