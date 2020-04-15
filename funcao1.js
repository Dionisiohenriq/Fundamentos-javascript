// Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(10, 15)
imprimirSoma(2)
imprimirSoma(2, 3, 5, 6, 7, 8)
imprimirSoma()

// Função com retorno
function Soma(a, b = 0) {
    return a + b
}

console.log(Soma(2, 6))
Soma(2, 3)
console.log(Soma(7))
