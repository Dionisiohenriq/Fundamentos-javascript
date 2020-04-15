// novo recurso do ES2015

const pessoa = {nome: 'Ana', idade: 5, endereço: {logradouro: 'Rua ABC', numero: 1000}}

const {nome, idade} = pessoa
console.log(nome, idade)

const {name, idade: i} = pessoa
console.log(name, i)

const {sobreNome, bemHumorada = true} = pessoa
console.log(sobreNome, bemHumorada)

const {endereço: {logradouro: l, numero: n, cep: c}} = pessoa
console.log(l, n, c)

