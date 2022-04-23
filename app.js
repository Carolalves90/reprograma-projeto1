const livros = require('./database')

const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')

const resposta = read.question(`
============== Menu ================

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros nao lidos

5 - SAIR

Digite um numero[1-5]:
`)

switch (resposta){
    case '1':
        buscarLivros()
        break
    case '2':
    // chamar a função listarLivrosOrdenados
        break
    default:
        console.log('fim do algoritmo')
        break
}