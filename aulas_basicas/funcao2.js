// armazenando uma função em uma variável
const imprimirSoma = function (a, b){ console.log(a + b)}

imprimirSoma(2, 3)

// armazenando uma função arrow em Javascript

const soma = (a, b) => { return a + b}

console.log(soma(2, 3))

// retorno implícito na arrow function

const sub = (a, b) => a - b

console.log(sub(10, 5))
console.log(sub(7, 6))

const imprimir2 = a => console.log(a)

imprimir2("Legal!!")