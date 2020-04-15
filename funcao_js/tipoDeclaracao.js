console.log(soma(2, 3))
// function declaration, pode ser chamada antes da declaração
function soma (x, y) {

    return x + y
}


//function expression, não pode ser chamada antes da declaração
const sub = function (x, y) {

    return x - y
}

//named function expression, não pode ser chamada antes da declaração
const mult = function mult (x, y){
    return x * y
}

console.log(mult(2, 3))