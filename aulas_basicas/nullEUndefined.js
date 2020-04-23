const a = {nome: 'Teste'} // a armazena o endereço para o valor do objeto.

const b = a // a constante b aponta para o mesmo lugar na memória

b.nome = 'opa'

console.log(a)

let c = 3  //tipo primitivo da linguagem
let d = c // a passagem de dados nesse caso é por valor
 
d++
console.log(d)
console.log(c)

let valor
console.log(valor)

valor = null
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.25
console.log(produto)

produto.preco = undefined // evite atribuir undefined, procure utilizar 0 ou null
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)


//em resumo, quando se trabalha com objetos e funções - tipos não primitos - a passagem de valor é
//feita por referência(endereço de memória), quando se trabalha com tipos primitivos, são passagens por valor
//cada variável terá seu valor e a mudança de uma não implica na mudança do valor da outra
//adicionalmente, quando se é necessário anular o valor ou referência de uma variável, usa-se null
//neste caso, não será possível mais utilizar quaisquer funções sobre esta variável, enquanto ela for nula.




