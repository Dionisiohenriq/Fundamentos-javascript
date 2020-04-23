// Exercício 1
function calc (x, y) {
    //console.log(x + y, x - y, x * y, x / y)

    return { 
        soma: x + y,
        sub : x - y,
        mult: x * y,
        div : x / y
    }
}

//calc(3, 5)
console.log(calc(5, 3))

// Exercicio 2
function triangulo(a, b, c){

       if(a === b && a === c){
           console.log('Equilátero')
       }else if(a === b || a === c || b === c){
                console.log('Isóceles')
       }else if(a !== b && a !== c && b !== c){
           console.log("Escaleno")
       }

}
triangulo(4, 2, 2)

/* -------------   */
function exp(a, b){
    return a ** b
}
console.log(exp(2, 4))


let divisao = (a, b) => {console.log(a / b, a % b)}

divisao(4, 2)


let dinheiro = x => {console.log(`${x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)}

dinheiro(0.30000000000000000004)

function jurosSimples(c, i, t){

    let j = (c * i * t)/ 100
    return j

}

function jurosCompostos(c, i, t){

    let j = (c*( 1 + i )**t)
}


const a = (a, b) => Math.pow(a, b)
console.log(a(2, 3))


let d = (x, y) => {return x / y , x % y}
console.log(d(5, 2))

function conversao (c) {
    let numero = c.toFixed(2).replace('.', ',')
    return console.log(`R$${numero}`)
}
conversao(0.30000)


function jurosSimples(c, i, n){

    let m = c * (i/100) * n + c
    return m.toFixed(2)
}
function jurosCompostos(c, i, n){

    let m = c *(1 + i/100) ** n
    return m.toFixed(2)
}
console.log(jurosSimples(3000, 12, 3))
console.log(jurosCompostos(3000, 12, 3))


function bhaskara(a, b, c){

    let delta = (b**2) - (4 * a * c)
    let vetor = []
    if(delta > 0){
       let x1 = (-b + Math.sqrt(delta))/ (2*a)
       let x2 = (-b - Math.sqrt(delta))/ (2*a)
       vetor.push(x1)
       vetor.push(x2)
       return vetor
    }else if(delta === 0){
       let x1 = (-b + Math.sqrt(delta))/ (2*a)
       let x2 = (-b - Math.sqrt(delta))/ (2*a)
       vetor.push(x1)
       vetor.push(x2) 
        return vetor
    }else{
        
        console.log('delta é negativo!')
    }

}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))

let stringPontuacoes = "10, 20, 40, 4, 3, 5, 10, 9, 15, 16"

function avaliaPontuacoes(){
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraRecordes = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i = 1; i < pontuacoes.length; i++){
        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            qtdQuebraRecordes++
        }else if(pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
        
    }
    return [qtdQuebraRecordes, piorJogo]

}

console.log(avaliaPontuacoes(stringPontuacoes))

