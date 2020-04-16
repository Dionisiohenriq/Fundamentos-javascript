// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'

console.log(pessoa)

// pessoa ->456-> {...} isso não é possível - alterar o endereço de memória de uma constante.
// pessoa = { nome: 'Ana'} 

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

//criando um objeto constante, nem o endereço de memória da constante, nem os dados do objeto serão mudados.
const pessoaConstante = Object.freeze({nome: 'João'})