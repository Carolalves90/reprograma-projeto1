const read = require('readline-sync')

const desejaSair = () => {
    const opcaoCinco = read.question(`Deseja sair da sua busca? S/N `).toUpperCase()
    if(opcaoCinco === 'S'){
        console.log('Você saiu da sua busca!')
    }
    
}


module.exports = desejaSair