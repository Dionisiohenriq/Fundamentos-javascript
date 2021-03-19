const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Todos os alunos são bolsistas?

// implementação do professor
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// minha implementação
const resultado = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if(acumulador && atual){
        return true    
    }else{
        return false
    }
})

console.log(resultado)
// Pelo menos um aluno é bolsista?

// implementação do professor
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

// minha implementação
const bolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if(acumulador || atual){
        return true
    }else{
        return false
    }
})

console.log(bolsista)
