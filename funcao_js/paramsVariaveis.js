function soma(){

    let soma = 0

    for (i in arguments){ // toda função tem esse array interno! Arguments
        soma += arguments[i]
    }

    return soma

}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 1.2, 1.3))
console.log(soma(1.1, 1.2, 'teste'))
console.log(soma('a', 'b', 'c'))