const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
        Olá
        ${nome}!`

console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
const potencia = (a, b) => Math.pow(a, b)

console.log(`O resultado da expressão é: ${potencia(2, 3).toFixed(2)}!`)

console.log(`Ei... ${up('cuidado')}!`)

raiz = (a) => Math.cbrt(a)

console.log(`A raiz cúbica é: ${raiz(64)}`)
