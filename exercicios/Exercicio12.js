function Fatorial(fatorial){
    if(fatorial === 0){
        return 1
    }else{
        return fatorial * Fatorial(fatorial - 1)
    }
}

console.log(Fatorial(5))