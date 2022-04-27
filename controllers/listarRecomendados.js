const livros = require('../database')
const read = require('readline-sync')

const listarRecomendados = () => {
    const opcaoTres = read.question(`Deseja ver a lista de Livros Recomendados? S/N `).toUpperCase()
    if(opcaoTres === 'S'){
        const indica = livros.filter(livro => livro.recomenda === true)
        console.table(indica)
    }

}

module.exports = listarRecomendados