const livros = require('../database')
const read = require('readline-sync')

const listarlivrosNaoLidos = () =>{
    const opcaoQuatro = read.question(`Deseja verificar sua lista de livros nao lidos? S/N `).toUpperCase()
    if(opcaoQuatro === 'S'){
        const naoLidos = livros.filter(livro => livro.leu === false)
        console.table(naoLidos)

    }
}

module.exports = listarlivrosNaoLidos