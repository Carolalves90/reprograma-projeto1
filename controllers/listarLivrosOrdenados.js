const livros = require('../database')
const read = require('readline-sync')

const listarLivrosOrdenados = () => {
    const opcaoDois = read.question(`Deseja organizar os livros de forma crescente por quantidade de paginas? S/N `).toUpperCase()
    if (opcaoDois === 'S'){
        const ordenar = livros.sort((a,b) => a.paginas - b.paginas)
        console.table(ordenar)
        
    }

}

module.exports = listarLivrosOrdenados