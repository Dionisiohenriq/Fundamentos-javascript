function calc(a, b, c){
    switch(c){
        case '+':
            return a + b
            
        case '-':
            return a - b
            
        case '*':
            return a * b
            
        case '/':
           return a / b
        default:
            console.log("String inválida!")
    }
}

console.log(calc(2, 1, '*'))