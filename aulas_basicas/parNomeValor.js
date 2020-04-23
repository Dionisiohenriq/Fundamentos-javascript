// par nome/ valor
const saudacao = 'opa' // contexto léxico

function exec(){const saudacao = 'Falaaa'; return saudacao}

const cliente = {nome: 'Pedro', idade: 32, peso: 90, endereco:{logradouro: 'Rua show', numero: 123}}

console.log(saudacao)
console.log(exec())
console.log(cliente)