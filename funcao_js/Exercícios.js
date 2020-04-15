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

    j = (c * i * t)/ 100
    return j

}

function jurosCompostos(c, i, t){

    j = (c*( 1 + i )**t)
}