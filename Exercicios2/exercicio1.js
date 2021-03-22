// Exercícios do 1 ao 
// 1
const cumprimentar = (nome) => console.log("Olá, " + nome + "!")
cumprimentar("Leonardo")
cumprimentar("Maria")

// 2
const idadeEmDias = idade => idade * 365
console.log(idadeEmDias(32))

// 3
const salario = (horas, valorHora) => horas * valorHora
console.log(salario(150, 70))

// 4
const meses = ["Indice 0", "Janeiro", "Fevereiro", "Março",
              "Abril", "Maio", "Junho", "Julho",
              "Agosto", "Setembro", "Outubro",
              "Novembro", "Dezembro"]
const buscaMes = numeroMes => meses[numeroMes]
console.log(buscaMes(12))

// 5
const comparacao = (numero1, numero2) => numero1 == numero2
console.log(comparacao(1, 1))

// 6
const inverso = function(numOuBool){
    if(typeof(numOuBool == Number)){
        if(numOuBool > 0){
            return -numOuBool 
        }else{
            return numOuBool
        }
    }else if(typeof(numOuBool == Boolean)){
        if(numOuBool){
            return false
        }else{
            return true
        }
    }
}
console.log(inverso(-20))