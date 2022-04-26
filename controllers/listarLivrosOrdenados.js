const livros = require('../database')
const read = require('readline-sync')

const listarLivrosOrdenados = () => {
    const opcaoDois = read.question(`Deseja organizar os livros de forma crescente por quantidade de paginas?`)
    if (opcaoDois === 'S'){
        const ordenar = livros.sort(livro => livro.paginas)
        console.table(ordenar)
                
    }
    console.log('Chamei a funcao livros Ordenados')
}

module.exports = listarLivrosOrdenados